// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require("node:fs/promises");
const path = require("node:path");
const { promisify } = require('node:util');
const process = require("node:process");

const glob = promisify(require('glob'));
const yargs = require('yargs');

// Note: fantasticon is patched via patch-package to use String.fromCodePoint instead of String.fromCharCode
// See patches/fantasticon+1.2.3.patch for details
// Related PR: https://github.com/tancredi/fantasticon/pull/507
const fantasticon = require('fantasticon');

const parseArgs = (args = process.argv.slice(2)) => {
  const argv = yargs(args)
    .usage('Usage: $0 --source <src> --dest <dest> --iconType <type> [options]')
    .option('source', {
      type: 'string',
      describe: 'Icon source folder',
      demandOption: true,
    })
    .option('dest', {
      type: 'string',
      describe: 'Output destination folder',
      demandOption: true,
    })
    .option('iconType', {
      type: 'string',
      describe: 'Icon type (Filled|Regular|Resizable|Light)',
      demandOption: true,
      choices: ['Filled', 'Regular', 'Resizable', 'Light'],
    })
    .option('codepoints', {
      type: 'string',
      describe: 'Path to existing codepoints JSON file',
    })
    .help()
    .wrap(Math.min(120, process.stdout.columns || 120))
    .argv;

  /**
   * @typedef {'Filled'|'Regular'|'Resizable'|'Light'} IconType
   *
   * @typedef {{
   *   SRC_PATH: string,
   *   DEST_PATH: string,
   *   ICON_TYPE: IconType,
   *   CODEPOINTS_FILE: string | undefined
   * }} ParseResult
   */

  return /** @type {ParseResult} */ ({
    SRC_PATH: argv.source,
    DEST_PATH: argv.dest,
    ICON_TYPE: /** @type {IconType} */ (argv.iconType),
    CODEPOINTS_FILE: argv.codepoints,
  });
};

const { SRC_PATH, DEST_PATH, ICON_TYPE, CODEPOINTS_FILE } = parseArgs();

async function main() {

    const MAX_PRIVATE_USE_CODEPOINTS = 137468;
    await fs.mkdir(DEST_PATH, { recursive: true });
    const stagingFolder = path.resolve(DEST_PATH, ICON_TYPE);
    await fs.mkdir(stagingFolder, { recursive: true });

    /** @type {string[]} */
    const svgFiles = await glob(path.resolve(SRC_PATH, `*_${ICON_TYPE === 'Resizable' ? '20_{filled,regular,light}' : ICON_TYPE.toLowerCase()}.svg`));
    const icons = new Set(svgFiles.map(file => path.basename(file).replace(/\.svg$/, '')));

    if (icons.size > MAX_PRIVATE_USE_CODEPOINTS) {
        throw new Error('Too many icons to fit into the Unicode private use area(s). See https://www.unicode.org/faq/private_use.html')
    }

    // Copy all icons of the given icon type to the staging folder
    await Promise.all((svgFiles).map(
        async svgFile => fs.copyFile(svgFile, path.resolve(stagingFolder, path.basename(svgFile)))
    ));

    // Generate the font and associated assets
    await fantasticon.generateFonts({
        inputDir: stagingFolder,
        outputDir: path.resolve(DEST_PATH),
        name: `FluentSystemIcons-${ICON_TYPE}`,
        fontTypes: [fantasticon.ASSET_TYPES.WOFF2, fantasticon.ASSET_TYPES.WOFF, fantasticon.ASSET_TYPES.TTF],
        assetTypes: [fantasticon.ASSET_TYPES.CSS, fantasticon.ASSET_TYPES.HTML, fantasticon.ASSET_TYPES.JSON],
        formatOptions: { json: { indent: 2 } },
        codepoints: await getCodepoints(icons),
        fontHeight: 500,
        normalize: true
    });

    // Clean up staging folder
    await Promise.all(svgFiles.map(
        async svgFile => fs.unlink(path.resolve(stagingFolder, path.basename(svgFile)))
    ));
    if ((await fs.readdir(stagingFolder)).length === 0) {
        await fs.rmdir(stagingFolder);
    }
}

/**
 *
 * @param {Set<string>} icons - Set of icons being consumed into the font
 * @returns {Promise<Record<string, number>>}
 */
async function getCodepoints(icons) {
    /** @type {Record<string, number>} */
    let codepoints = {};
    if (CODEPOINTS_FILE) {
        const originalCodepoints = JSON.parse(await fs.readFile(CODEPOINTS_FILE, 'utf8'));
        codepoints = Object.fromEntries(
            Object.entries(originalCodepoints)
                .filter(([iconName]) => icons.has(iconName))
                .map(([iconName, codepoint]) => [iconName, typeof codepoint === 'number' ? codepoint : Number.parseInt(codepoint)])
        );
    }

    // Fix any codepoints outside the private use area
    let nextCodePoint = 0xe000;
    let usedCodePoints = new Set(Object.values(codepoints));

    for (const iconName of icons) {
        const originalCodepoint = codepoints[iconName]
        if (!originalCodepoint || !isPrivateUseAreaCodepoint(originalCodepoint)) {
            // Find a new free codepoint
            while (usedCodePoints.has(nextCodePoint)) {
                nextCodePoint++;
                if (nextCodePoint === 0xf900) {
                    nextCodePoint = 0xF0000;
                } else if (nextCodePoint === 0xFFFFE) {
                    nextCodePoint = 0x100000;
                }
            }

            usedCodePoints.add(nextCodePoint);
            codepoints[iconName] = nextCodePoint;
        }
    }

    return codepoints;

}

/**
 * @param {number} codepoint
 * @returns {boolean} Whether the codepoint falls within one of the Unicode Private Use Areas
 */
function isPrivateUseAreaCodepoint(codepoint) {
    return (codepoint >= 0xe000 && codepoint <= 0xf8ff) || (codepoint >= 0xF0000 && codepoint <= 0xFFFFD) || (codepoint >= 0x100000 && codepoint <= 0x10FFFD);
}

main();
