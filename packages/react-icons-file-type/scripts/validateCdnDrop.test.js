// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const { assertAllowedUrl, compareCdnMapToPackage, normalizeCdnInput, validateCdnDrop } = require('./validateCdnDrop');

function writeAsset(itemTypesDir, size, density, iconName, imageFileType) {
  const folder = path.join(itemTypesDir, `${size}${density}`);
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, `${iconName}.${imageFileType}`), '<svg></svg>');
}

describe('validateCdnDrop', () => {
  it('normalizes folder and manifest URLs', () => {
    const folder = normalizeCdnInput('https://res.cdn.office.net/files/drop/assets/item-types/');
    expect(folder.baseUrl.href).toBe('https://res.cdn.office.net/files/drop/assets/item-types/');
    expect(folder.manifestUrl.href).toBe(
      'https://res.cdn.office.net/files/drop/assets/item-types/filetype-ci-manifest.json',
    );
    expect(folder.manifestRequired).toBe(false);

    const manifest = normalizeCdnInput(
      'https://res.cdn.office.net/files/drop/assets/item-types/filetype-ci-manifest.json',
    );
    expect(manifest.baseUrl.href).toBe('https://res.cdn.office.net/files/drop/assets/item-types/');
    expect(manifest.manifestRequired).toBe(true);
  });

  it('rejects non-CDN and file URLs by default', () => {
    expect(() => assertAllowedUrl(new URL('https://example.com/assets/item-types/'))).toThrow(/not allowed/);
    expect(() => assertAllowedUrl(pathToFileURL(__filename))).toThrow(/file: URLs/);
    expect(() => assertAllowedUrl(pathToFileURL(__filename), { allowFileUrl: true })).not.toThrow();
  });

  it('compares CDN map extensions and type ledger entries', () => {
    const cdnMap = {
      agentwork: { extensions: ['work'] },
      genericfile: { types: ['genericFile'] },
      pbiapp: { types: ['pbiApp'] },
      powerbi: { extensions: ['pbix'], types: ['pbiReport'] },
    };
    const packageMap = {
      agentwork: ['work'],
      genericfile: null,
      pbiapp: null,
      powerbi: ['pbix'],
    };
    const fileIconTypes = [
      { value: 3, name: 'genericFile', icon: null },
      { value: 25, name: 'pbiApp', icon: 'pbiapp' },
      { value: 30, name: 'pbiReport', icon: 'powerbi' },
    ];

    expect(compareCdnMapToPackage(cdnMap, packageMap, fileIconTypes).errors).toEqual([]);
  });

  it('reports stale package keys and wrong type icon targets', () => {
    const result = compareCdnMapToPackage(
      { agentwork: { extensions: ['work'] }, pbiapp: { types: ['pbiApp'] } },
      { cowork: ['work'], pbiapp: null },
      [{ value: 25, name: 'pbiApp', icon: 'wrong' }],
    );

    expect(result.errors.join('\n')).toMatch(/Missing package map key: agentwork/);
    expect(result.errors.join('\n')).toMatch(/Extra package map key/);
    expect(result.errors.join('\n')).toMatch(/expected 'pbiapp'/);
  });

  it('validates a local folder URL and warns for missing high-DPI PNGs', async () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'react-icons-file-type-cdn-'));
    try {
      const itemTypesDir = path.join(root, 'assets', 'item-types');
      fs.mkdirSync(itemTypesDir, { recursive: true });
      fs.writeFileSync(
        path.join(itemTypesDir, 'filetypeiconmap.json'),
        `${JSON.stringify({ agentwork: { extensions: ['work'] }, pbiapp: { types: ['pbiApp'] } }, null, 2)}\n`,
      );

      for (const iconName of ['agentwork', 'pbiapp']) {
        writeAsset(itemTypesDir, 24, '', iconName, 'svg');
        writeAsset(itemTypesDir, 48, '', iconName, 'svg');
        writeAsset(itemTypesDir, 24, '', iconName, 'png');
      }

      const result = await validateCdnDrop({
        cdnUrl: pathToFileURL(itemTypesDir).href,
        allowFileUrl: true,
        representativeIcons: ['agentwork', 'pbiapp'],
        packageMap: { agentwork: ['work'], pbiapp: null },
        fileIconTypes: [{ value: 25, name: 'pbiApp', icon: 'pbiapp' }],
      });

      expect(result.ok).toBe(true);
      expect(result.usedFallback).toBe(true);
      expect(result.assetCheck.requiredChecks).toBe(6);
      expect(result.assetCheck.errors).toHaveLength(0);
      expect(result.assetCheck.warnings.length).toBeGreaterThan(0);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });
});
