const path = require('node:path');
const { camelCase, upperFirst, kebabCase } = require('lodash');

/** @param {string} file */
function parseIconName(file) {
  const parts = file.replace(/\\/g, '/').split('/');
  const filename = parts.pop();
  if (!filename) throw new Error(`Missing icon filename: ${file}`);
  const stem = filename.replace(/\.svg$/, '').replace(/^ic_fluent_/, '');
  const match =
    stem.match(/^(.*)_(\d+)_(filled|regular|light|color)(?:_([a-z][a-z0-9_]*))?$/) ||
    stem.match(/^(.*?)(?:_(\d+))?(?:_(filled|regular|light|color))?$/);
  if (!match) throw new Error(`Invalid icon name: ${file}`);
  let locale;
  let direction;
  for (const part of parts) {
    if (/^(LTR|RTL)$/i.test(part)) {
      if (direction) throw new Error(`Duplicate direction in icon path: ${file}`);
      direction = part.toLowerCase();
    } else if (/^[a-z]{2,3}(?:[-_][a-z0-9]+)*$/.test(part)) {
      if (locale) throw new Error(`Duplicate locale in icon path: ${file}`);
      locale = part.replace(/-/g, '_');
    } else {
      throw new Error(`Unsupported icon directory: ${part}`);
    }
  }
  if (match[4] && parts.length) throw new Error(`Ambiguous icon qualifiers: ${file}`);
  const qualifier = match[4] || [locale, direction].filter(Boolean).join('_');
  return {
    base: match[1],
    size: match[2],
    style: match[3],
    qualifier,
    direction: direction || (qualifier.match(/(?:^|_)(ltr|rtl)$/) || [])[1],
  };
}

/** @param {string} file @param {boolean} resizable */
function getIconExportName(file, resizable) {
  const { base, size, style, qualifier } = parseIconName(file);
  const sourceName = file.replace(/\.svg$/, '').replace(/^ic_fluent_/, '');
  const name = upperFirst(
    camelCase(
      qualifier
        ? [base, resizable ? undefined : size, style].filter(Boolean).join('_')
        : resizable
          ? sourceName.replace('20', '')
          : sourceName,
    ),
  );
  const exportQualifier = qualifier.split('_').map((part, index) => index ? upperFirst(part) : part).join('');
  return name + (qualifier ? `_${exportQualifier}` : '');
}

/** @param {string} file */
function isResizableIconSource(file) {
  const identity = parseIconName(file);
  return identity.qualifier ? identity.size === '20' : file.includes('20');
}

/** @param {string} file */
function isDirectionOnlyIconSource(file) {
  const identity = parseIconName(file);
  return Boolean(identity.direction) && identity.qualifier === identity.direction;
}

/** @param {string} exportName */
function getIconFileName(exportName) {
  const [name, qualifier] = exportName.split('_');
  const fileQualifier = qualifier?.replace(/([a-z\d])([A-Z])/g, '$1-$2').replace(/([a-z])(\d)/g, '$1-$2').toLowerCase();
  return kebabCase(name) + (fileQualifier ? `_${fileQualifier}` : '') + '.tsx';
}

/** @param {string} file */
function getGlyphName(file) {
  const parsed = parseIconName(file);
  const stem = path.posix.basename(file.replace(/\\/g, '/')).replace(/\.svg$/, '');
  return stem + (parsed.qualifier && file.includes('/') ? `_${parsed.qualifier}` : '');
}

/** @param {string} file @param {boolean} resizable @param {Record<string, 'mirror' | 'unique'>} metadata */
function getIconFlipInRtl(file, resizable, metadata) {
  const name = getIconExportName(file, resizable);
  return !parseIconName(file).direction && (metadata[name] || metadata[name.split('_')[0]]) === 'mirror';
}

module.exports = {
  parseIconName,
  getIconExportName,
  getIconFileName,
  getGlyphName,
  getIconFlipInRtl,
  isResizableIconSource,
  isDirectionOnlyIconSource,
};
