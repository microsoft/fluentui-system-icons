import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { transformSync } from 'esbuild';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import {
  generateIconComponents,
  generateIconFile,
  generateIconModule,
  renderIconModule,
  resolveSvgIconsDir,
} from './src/codegen/index.ts';

describe('codegen', () => {
  const simple = '<svg width="20" height="20" viewBox="0 0 20 20"><path fill="#212121" d="M1 2h3"/></svg>';
  const mixed =
    '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#212121" d="M1 2h3"/><path fill="none" d="M2 3h4"/></svg>';
  let directory;
  let svgDir;

  const assertValidTsx = (source) => expect(() => transformSync(source, { loader: 'tsx' })).not.toThrow();

  beforeAll(() => {
    directory = fs.mkdtempSync(path.join(os.tmpdir(), 'fluent-rn-codegen-'));
    svgDir = path.join(directory, 'icons');
    fs.mkdirSync(svgDir);
    fs.writeFileSync(path.join(svgDir, 'dot_20_regular.svg'), simple);
    fs.writeFileSync(path.join(svgDir, 'dot_24_filled.svg'), mixed);
  });

  afterAll(() => {
    fs.rmSync(directory, { recursive: true, force: true });
  });

  it('generates a module with double quotes and the package util path by default', () => {
    const source = generateIconModule([{ name: 'dot_20_regular', svg: simple }]);
    expect(source).toMatchInlineSnapshot(`
      "import { Path } from "react-native-svg";
      import type { SvgProps } from "react-native-svg";
      import type { FluentIconsProps } from "@fluentui/react-native-icons/utils";
      import { FluentSvg } from "@fluentui/react-native-icons/utils";

      export const DotRegular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg {...props}><Path d="M1 2h3" /></FluentSvg>;


      export const Dot20Regular = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => <FluentSvg size={20} {...props}><Path d="M1 2h3" /></FluentSvg>;
      "
    `);
    assertValidTsx(source);
  });

  it('generates a module with single quotes', () => {
    const source = generateIconModule([{ name: 'dot_24_filled', svg: mixed }], { quote: "'" });
    expect(source).toMatchInlineSnapshot(`
      "import { Path } from 'react-native-svg';
      import type { SvgProps } from 'react-native-svg';
      import type { FluentIconsProps } from '@fluentui/react-native-icons/utils';
      import { FluentSvg } from '@fluentui/react-native-icons/utils';

      export const Dot24Filled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => {
        const { primaryFill = 'currentColor' } = props;
        return <FluentSvg size={24} {...props}><Path fill={primaryFill} d="M1 2h3" /><Path fill="none" d="M2 3h4" /></FluentSvg>;
      };
      "
    `);
    assertValidTsx(source);
  });

  it('generates a module with a custom util path', () => {
    const source = generateIconModule([{ name: 'dot_24_filled', svg: mixed }], { utilPath: '../utils' });
    expect(source).toMatchInlineSnapshot(`
      "import { Path } from "react-native-svg";
      import type { SvgProps } from "react-native-svg";
      import type { FluentIconsProps } from "../utils";
      import { FluentSvg } from "../utils";

      export const Dot24Filled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => {
        const { primaryFill = "currentColor" } = props;
        return <FluentSvg size={24} {...props}><Path fill={primaryFill} d="M1 2h3" /><Path fill="none" d="M2 3h4" /></FluentSvg>;
      };
      "
    `);
    assertValidTsx(source);
  });

  it('escapes the util path in imports', () => {
    const source = generateIconModule([{ name: 'dot_24_filled', svg: mixed }], {
      quote: "'",
      utilPath: 'it\'s/a"path',
    });
    expect(source).toMatchInlineSnapshot(`
      "import { Path } from 'react-native-svg';
      import type { SvgProps } from 'react-native-svg';
      import type { FluentIconsProps } from 'it\\'s/a"path';
      import { FluentSvg } from 'it\\'s/a"path';

      export const Dot24Filled = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => {
        const { primaryFill = 'currentColor' } = props;
        return <FluentSvg size={24} {...props}><Path fill={primaryFill} d="M1 2h3" /><Path fill="none" d="M2 3h4" /></FluentSvg>;
      };
      "
    `);
    assertValidTsx(source);
  });

  it('rejects invalid module options', () => {
    const icons = [{ name: 'dot_24_filled', svg: mixed }];
    expect(() => generateIconModule(icons, { quote: '`' })).toThrow(/Unsupported quote style/);
    expect(() => generateIconModule(icons, { utilPath: '' })).toThrow(/utilPath/);
  });

  it('imports native image and text elements used by component strings', () => {
    const source = renderIconModule([
      'export const ImageIcon = () => <Image />;',
      'export const TextIcon = () => <Text><TSpan /><TextPath /></Text>;',
    ]);
    expect(source).toMatchInlineSnapshot(`
      "import { Image, Text, TSpan, TextPath } from "react-native-svg";
      import type { SvgProps } from "react-native-svg";
      import type { FluentIconsProps } from "@fluentui/react-native-icons/utils";
      import { FluentSvg } from "@fluentui/react-native-icons/utils";
      export const ImageIcon = () => <Image />;
      export const TextIcon = () => <Text><TSpan /><TextPath /></Text>;"
    `);
    assertValidTsx(source);
  });

  it('deduplicates native element imports across and within components', () => {
    const source = renderIconModule([
      'export const First = () => <G><Path /><Image /><Path /></G>;',
      'export const Second = () => <G><Image /><TSpan /><TSpan /></G>;',
    ]);
    expect(source).toMatchInlineSnapshot(`
      "import { Path, G, Image, TSpan } from "react-native-svg";
      import type { SvgProps } from "react-native-svg";
      import type { FluentIconsProps } from "@fluentui/react-native-icons/utils";
      import { FluentSvg } from "@fluentui/react-native-icons/utils";
      export const First = () => <G><Path /><Image /><Path /></G>;
      export const Second = () => <G><Image /><TSpan /><TSpan /></G>;"
    `);
    assertValidTsx(source);
  });

  it('renders an empty component list as an empty module', () => {
    expect(renderIconModule([])).toMatchInlineSnapshot(`
      "export {};
      "
    `);
  });

  it('reads icons passed by name from svgDir', () => {
    const [resizable, sized] = generateIconComponents('dot_20_regular', { svgDir });
    expect(resizable).toContain('export const DotRegular = ');
    expect(sized).toContain('export const Dot20Regular = ');
    expect(generateIconModule(['dot_20_regular', 'dot_24_filled'], { svgDir })).toContain(
      'export const Dot24Filled = ',
    );
  });

  it('generates each icon once, with the last spec for a name winning', () => {
    const source = generateIconModule([
      { name: 'dot_24_filled', svg: simple },
      { name: 'dot_24_filled', svg: mixed },
    ]);
    expect(source.match(/export const Dot24Filled/g)).toHaveLength(1);
    expect(source).toContain('primaryFill');
  });

  it('generates an empty module when there are no icons', () => {
    expect(generateIconModule([])).toBe('export {};\n');
  });

  it('writes a named .tsx file, creating its directory', () => {
    const file = path.join(directory, 'nested', 'Custom.tsx');
    generateIconFile(file, ['dot_20_regular'], { svgDir, utilPath: '../utils' });
    const source = fs.readFileSync(file, 'utf8');
    expect(source).toContain('import { FluentSvg } from "../utils";');
    expect(source).toContain('export const Dot20Regular = ');
  });

  it('rejects files that are not .tsx and icons it cannot generate', () => {
    expect(() => generateIconFile(path.join(directory, 'Custom.ts'), [], {})).toThrow(/must end with \.tsx/);
    expect(fs.existsSync(path.join(directory, 'Custom.ts'))).toBe(false);
    expect(() => generateIconModule([{ name: 'dot_24', svg: simple }])).toThrow(/does not match/);
    expect(() => generateIconModule([{ name: 'dot_24_bold', svg: simple }])).toThrow(/does not match/);
    expect(() => generateIconModule(['missing_20_regular'], { svgDir })).toThrow(/ENOENT/);
  });

  it('does not read SVGR config files from the working directory', () => {
    const project = path.join(directory, 'svgr-project');
    fs.mkdirSync(project);
    fs.writeFileSync(path.join(project, '.svgrrc'), '{"titleProp": true, "ref": true, "svgProps": {"role": "img"}}');
    const entry = pathToFileURL(path.resolve(__dirname, 'src/codegen/index.ts')).href;
    const script = `import { generateIconModule } from ${JSON.stringify(entry)};
process.stdout.write(generateIconModule([{ name: 'dot_20_regular', svg: ${JSON.stringify(simple)} }]));`;
    const result = spawnSync(
      process.execPath,
      ['--disable-warning=MODULE_TYPELESS_PACKAGE_JSON', '--input-type=module', '-e', script],
      { cwd: project, encoding: 'utf8' },
    );
    expect(result.status, result.stderr).toBe(0);
    expect(result.stdout).toBe(generateIconModule([{ name: 'dot_20_regular', svg: simple }]));
  });

  const importWithSvgr = async (factory) => {
    vi.resetModules();
    vi.doMock('@svgr/core', factory);
    try {
      return await import('./src/codegen/index.ts');
    } finally {
      vi.doUnmock('@svgr/core');
      vi.resetModules();
    }
  };

  it('names the JSX plugin, which @svgr/core 7 and later no longer apply by default', async () => {
    const codegen = await importWithSvgr(async (importOriginal) => {
      const { transform } = await importOriginal();
      return {
        transform: {
          sync: (svg, config, state) => transform.sync(svg, { ...config, plugins: config.plugins ?? [] }, state),
        },
      };
    });
    const icons = [
      { name: 'dot_20_regular', svg: simple },
      { name: 'dot_24_filled', svg: mixed },
    ];
    expect(codegen.generateIconModule(icons)).toBe(generateIconModule(icons));
  });

  it('fails fast when @svgr/core returns the SVG unconverted', async () => {
    const codegen = await importWithSvgr(() => ({ transform: { sync: (svg) => svg } }));
    expect(() => codegen.generateIconComponents({ name: 'dot_20_regular', svg: simple })).toThrow(
      /did not convert dot_20_regular.*@svgr\/plugin-jsx/,
    );
  });

  it('resolves @fluentui/svg-icons from the given directory', () => {
    const project = path.join(directory, 'project');
    const pkg = path.join(project, 'node_modules', '@fluentui', 'svg-icons');
    fs.mkdirSync(pkg, { recursive: true });
    fs.writeFileSync(path.join(pkg, 'package.json'), '{"name":"@fluentui/svg-icons","version":"1.0.0"}');
    expect(resolveSvgIconsDir(project)).toBe(path.join(fs.realpathSync(pkg), 'icons'));

    const empty = path.join(directory, 'empty');
    fs.mkdirSync(empty);
    expect(() => resolveSvgIconsDir(empty)).toThrow(/Cannot find "@fluentui\/svg-icons".*svgDir/);
  });
});
