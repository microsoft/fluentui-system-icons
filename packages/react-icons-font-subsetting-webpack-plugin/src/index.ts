import * as webpack from "webpack";
import subsetFont from "subset-font";
import { extname, dirname, resolve } from "path";
import { readFile } from 'fs/promises';

const PLUGIN_NAME = "FluentUIReactIconsFontSubsettingPlugin";

const FONT_FILES_BASE_NAMES = [
    "FluentSystemIcons-Filled",
    "FluentSystemIcons-Resizable",
    "FluentSystemIcons-Regular",
    "FluentSystemIcons-Light"
];

const FONT_EXTENSIONS = [
    '.ttf',
    '.woff',
    '.woff2'
]

export default class FluentUIReactIconsFontSubsettingPlugin
    implements webpack.WebpackPluginInstance {

    apply(compiler: webpack.Compiler) {
        compiler.hooks.compilation.tap(
            PLUGIN_NAME,
            (compilation: webpack.Compilation) => {

                compilation.hooks.optimizeAssets.tapPromise(PLUGIN_NAME, async () => {
                    // There could be multiple instances of `@fluentui/react-icons`, and they need to be subset separately
                    const packageToUsedFontExports: Map<string, Set<string>> = new Map<string, Set<string>>();
                    for (const m of compilation.modules) {
                        if (isFluentUIReactFontChunk(m)) {
                            const usedModuleExports = compilation.moduleGraph.getUsedExports(m, undefined);

                            if (usedModuleExports === null || typeof usedModuleExports === 'boolean') {
                                // Either all exports are used or there's no info on used exports
                                continue;
                            }

                            const pkgLibPath = resolve(dirname(m.resource), '../..');

                            const usedPkgExports = packageToUsedFontExports.get(pkgLibPath) ?? new Set<string>();
                            for (const icon of usedModuleExports) {
                                usedPkgExports.add(icon);
                            }
                            packageToUsedFontExports.set(pkgLibPath, usedPkgExports);
                        }
                    }
                    const optimizationPromises: Promise<void>[] = [];

                    for (const [pkgLibPath, usedExports] of packageToUsedFontExports) {
                        for (const { assetName, codepoints: codepointMap } of await getFontAssetsAndCodepoints(pkgLibPath, compilation)) {
                            optimizationPromises.push(optimizeFontAsset(codepointMap, usedExports, compilation, assetName));
                        }
                    }

                    await optimizationPromises;
                });
            }
        );
    }
}

async function optimizeFontAsset(codepointMap: Record<string, number>, usedExports: Set<string>, compilation: webpack.Compilation, assetName: string) {
    const subsetText = Object.entries(codepointMap)
        .filter(([glyphName]) => usedExports.has(glyphName))
        .map(([, codepoint]) => String.fromCodePoint(codepoint))
        .join('');


    let source = compilation.assets[assetName].source();

    if (typeof source === "string") {
        source = Buffer.from(source);
    }

    compilation.assets[assetName] = new webpack.sources.RawSource(
        await subsetFont(
            source,
            subsetText,
            {
                targetFormat: getTargetFormat(assetName),
            }
        )
    );
}

function getTargetFormat(assetName: string) {
    switch (extname(assetName)) {
        case ".woff":
            return "woff";
        case ".woff2":
            return "woff2";
        default:
            return "sfnt";
    }
}

function isNormalModule(m: webpack.Module): m is webpack.NormalModule {
    return m instanceof webpack.NormalModule;
}

function isFluentUIReactFontChunk(m: webpack.Module): m is webpack.NormalModule {
    if (isNormalModule(m)) {
        return /react-icons[\/\\]lib(-cjs)?[\/\\]fonts[\/\\](sizedIcons|icons)[\/\\]chunk-\d+\.js$/.test(m.resource)
    }
    return false;
}

async function getFontAssetsAndCodepoints(pkgLibPath: string, compilation: webpack.Compilation): Promise<{ assetName: string, codepoints: Record<string, number> }[]> {
    const utilsFontsFolder = resolve(pkgLibPath, 'utils/fonts');
    const codepoints: Record<string, Record<string, number>> = Object.fromEntries(await Promise.all(
        FONT_FILES_BASE_NAMES.map(async fontBaseName => [fontBaseName, JSON.parse(await readFile(resolve(utilsFontsFolder, `${fontBaseName}.json`), 'utf8'))])
    ))
    const fontPaths = new Map<string, Record<string, number>>(
        FONT_FILES_BASE_NAMES.flatMap(fontBaseName => FONT_EXTENSIONS.map(ext => [resolve(utilsFontsFolder, `${fontBaseName}${ext}`), codepoints[fontBaseName]])
        ));

    const result: { assetName: string, codepoints: Record<string, number> }[] = [];

    for (const m of compilation.modules) {
        if (isNormalModule(m) && fontPaths.has(m.resource)) {
            const assetName = m.buildInfo?.filename;
            if (assetName) {
                result.push({ assetName, codepoints: fontPaths.get(m.resource)! })
            }
        }
    }

    return result;
}

