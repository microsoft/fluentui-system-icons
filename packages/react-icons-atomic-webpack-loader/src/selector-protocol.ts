import { basename, extname } from 'path';

export const SELECTOR_PROTOCOL_VERSION = 'v1';
export const SELECTOR_CACHE_SALT = `fluent-icon-selector-${SELECTOR_PROTOCOL_VERSION}`;
export const SELECTOR_QUERY_KEY = '__fluentIcon';
export const SELECTOR_PROTOCOL_IDENTIFIER = `${SELECTOR_QUERY_KEY}=${SELECTOR_PROTOCOL_VERSION}`;
export const SELECTOR_CAPABILITY = Symbol.for(`fluentui.react-icons.selector-protocol:${SELECTOR_PROTOCOL_IDENTIFIER}`);

const IDENTIFIER_PATTERN = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const HEX_PATTERN = /^(?:[0-9a-f]{2})+$/;
const SELECTOR_QUERY_PATTERN = new RegExp(`(?:^\\?|&)${SELECTOR_QUERY_KEY}(?:=|&|$)`);

export type Selector = { kind: 'export'; exportName: string } | { kind: 'group'; exportNames: string[] };
export type SelectorCapability = 'fonts' | 'svg-sprite';

export function encodeExportName(exportName: string): string {
  assertExportIdentifier(exportName);
  return Buffer.from(exportName, 'utf8').toString('hex');
}

export function decodeExportName(encoded: string): string {
  if (!HEX_PATTERN.test(encoded)) {
    throw new Error(`selector export "${encoded}" is not canonical lowercase UTF-8 hex`);
  }

  const exportName = Buffer.from(encoded, 'hex').toString('utf8');
  if (Buffer.from(exportName, 'utf8').toString('hex') !== encoded) {
    throw new Error(`selector export "${encoded}" is not valid canonical UTF-8`);
  }
  assertExportIdentifier(exportName);
  return exportName;
}

export function createExportSelector(exportName: string): string {
  return `?${SELECTOR_QUERY_KEY}=${SELECTOR_PROTOCOL_VERSION}&export=${encodeExportName(exportName)}`;
}

export function createGroupSelector(exportNames: Iterable<string>): string {
  const encoded = Array.from(new Set(Array.from(exportNames, encodeExportName))).sort();
  if (encoded.length === 0) {
    throw new Error('a selector group must contain at least one export');
  }
  return `?${SELECTOR_QUERY_KEY}=${SELECTOR_PROTOCOL_VERSION}&group=${encoded.join('.')}`;
}

export function parseSelectorQuery(resourceQuery: string): Selector | null {
  if (!resourceQuery) {
    return null;
  }
  if (!SELECTOR_QUERY_PATTERN.test(resourceQuery)) {
    return null;
  }
  if (!resourceQuery.startsWith('?')) {
    throw new Error(`malformed Fluent icon selector "${resourceQuery}"`);
  }

  // Package export-map wildcard substitution in webpack/rspack can append the
  // target's `.js` suffix to the final query value. The importer still emits
  // the canonical query; normalize this resolver artifact at the loader edge.
  const normalizedQuery = resourceQuery.endsWith('.js') ? resourceQuery.slice(0, -3) : resourceQuery;
  const pairs = normalizedQuery.slice(1).split('&');
  const values = new Map<string, string>();
  for (const pair of pairs) {
    const separator = pair.indexOf('=');
    if (separator <= 0) {
      throw new Error(`malformed Fluent icon selector "${resourceQuery}"`);
    }
    const key = pair.slice(0, separator);
    const value = pair.slice(separator + 1);
    if (values.has(key)) {
      throw new Error(`duplicate selector key "${key}" in "${resourceQuery}"`);
    }
    values.set(key, value);
  }

  if (!values.has(SELECTOR_QUERY_KEY)) {
    return null;
  }
  for (const key of values.keys()) {
    if (key !== SELECTOR_QUERY_KEY && key !== 'export' && key !== 'group') {
      throw new Error(`unknown Fluent icon selector key "${key}"`);
    }
  }
  if (values.get(SELECTOR_QUERY_KEY) !== SELECTOR_PROTOCOL_VERSION) {
    throw new Error(
      `unsupported Fluent icon selector protocol "${values.get(SELECTOR_QUERY_KEY) ?? ''}" ` +
        `(expected "${SELECTOR_PROTOCOL_VERSION}")`,
    );
  }

  const exportValue = values.get('export');
  const groupValue = values.get('group');
  if ((exportValue === undefined) === (groupValue === undefined)) {
    throw new Error('a Fluent icon selector must contain exactly one of "export" or "group"');
  }

  if (exportValue !== undefined) {
    const selector: Selector = { kind: 'export', exportName: decodeExportName(exportValue) };
    if (createExportSelector(selector.exportName) !== normalizedQuery) {
      throw new Error(`non-canonical Fluent icon selector "${resourceQuery}"`);
    }
    return selector;
  }

  const encodedNames = groupValue!.split('.');
  const exportNames = encodedNames.map(decodeExportName);
  const selector: Selector = { kind: 'group', exportNames };
  if (createGroupSelector(exportNames) !== normalizedQuery) {
    throw new Error(`non-canonical Fluent icon selector "${resourceQuery}"`);
  }
  return selector;
}

export function getPhysicalResource(resource: string): string {
  const queryIndex = resource.indexOf('?');
  return queryIndex === -1 ? resource : resource.slice(0, queryIndex);
}

export function assertSelectableResource(resourcePath: string, selector: Selector): void {
  if (extname(resourcePath) === '.cjs') {
    throw new Error(`queried CommonJS icon resources are not supported: "${resourcePath}"`);
  }

  const normalized = resourcePath.replace(/\\/g, '/');
  if (
    !/\/react-icons\/lib\/atoms\/(?:svg|fonts|headless-svg|headless-fonts|svg-sprite)\/[\w-]+\.js$/.test(normalized) &&
    !/\/react-brand-icons\/lib\/atoms\/(?:svg|headless-svg)\/[\w-]+\.js$/.test(normalized)
  ) {
    throw new Error(`selector does not target an allowed generated ESM icon atom: "${resourcePath}"`);
  }

  const family = basename(resourcePath, '.js');
  for (const exportName of selector.kind === 'export' ? [selector.exportName] : selector.exportNames) {
    if (getIconFamilyName(exportName) !== family) {
      throw new Error(`export "${exportName}" does not belong to icon family "${family}" in "${resourcePath}"`);
    }
  }
}

export function getSelectorCapability(resourcePath: string): SelectorCapability | null {
  const normalized = resourcePath.replace(/\\/g, '/');
  if (/\/atoms\/(?:headless-)?fonts\//.test(normalized)) {
    return 'fonts';
  }
  if (/\/atoms\/svg-sprite\//.test(normalized)) {
    return 'svg-sprite';
  }
  return null;
}

export function getRegisteredSelectorCapabilities(compilation: unknown): Set<SelectorCapability> {
  const target = compilation as Record<PropertyKey, unknown>;
  let capabilities = target[SELECTOR_CAPABILITY] as Set<SelectorCapability> | undefined;
  if (!capabilities) {
    capabilities = new Set<SelectorCapability>();
    target[SELECTOR_CAPABILITY] = capabilities;
  }
  return capabilities;
}

export function getIconFamilyName(exportName: string): string | null {
  const match = /(\d*)?(Regular|Filled|Light|Color)$/.exec(exportName);
  if (!match) {
    return null;
  }
  return toKebabCase(exportName.slice(0, match.index));
}

function assertExportIdentifier(exportName: string): void {
  if (!IDENTIFIER_PATTERN.test(exportName)) {
    throw new Error(`selector export "${exportName}" is not a valid JavaScript identifier`);
  }
}

function toKebabCase(value: string): string {
  return value.replace(/[a-z\d](?=[A-Z])|[a-zA-Z](?=\d)|[A-Z](?=[A-Z][a-z])/g, '$&-').toLowerCase();
}
