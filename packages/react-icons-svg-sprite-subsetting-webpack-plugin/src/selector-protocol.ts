import type * as webpack from 'webpack';

const PLUGIN_NAME = 'FluentUIReactIconsSvgSpriteSubsettingPlugin';
const SELECTOR_QUERY_KEY = '__fluentIcon';
const SELECTOR_PROTOCOL_VERSION = 'v1';
const SELECTOR_PROTOCOL_IDENTIFIER = `${SELECTOR_QUERY_KEY}=${SELECTOR_PROTOCOL_VERSION}`;
const SELECTOR_CAPABILITY = Symbol.for(`fluentui.react-icons.selector-protocol:${SELECTOR_PROTOCOL_IDENTIFIER}`);
const SELECTOR_PROTOCOL_PATTERN = new RegExp(`(?:\\?|&)${SELECTOR_QUERY_KEY}=([^&]+)`);

export function hasFluentSelector(resource: string): boolean {
  return SELECTOR_PROTOCOL_PATTERN.test(resource);
}

export function assertSupportedSelector(resource: string): void {
  const match = SELECTOR_PROTOCOL_PATTERN.exec(resource);
  if (match && match[1] !== SELECTOR_PROTOCOL_VERSION) {
    throw new Error(
      `${PLUGIN_NAME}: unsupported Fluent icon selector protocol "${match[1]}" ` +
        `(expected "${SELECTOR_PROTOCOL_VERSION}") in "${resource}".`,
    );
  }
}

export function registerSelectorCapability(compilation: webpack.Compilation): void {
  const target = compilation as unknown as Record<PropertyKey, unknown>;
  let capabilities = target[SELECTOR_CAPABILITY] as Set<string> | undefined;
  if (!capabilities) {
    capabilities = new Set<string>();
    target[SELECTOR_CAPABILITY] = capabilities;
  }
  capabilities.add('svg-sprite');
}
