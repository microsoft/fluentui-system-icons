import { describe, expect, it } from 'vitest';
import * as plugin from './index';

describe('@fluentui/eslint-plugin-react-icons', () => {
  it('exposes plugin meta', () => {
    expect(plugin.meta.name).toBe('@fluentui/eslint-plugin-react-icons');
    expect(typeof plugin.meta.version).toBe('string');
  });

  it('exposes a rules registry', () => {
    expect(plugin.rules).toBeTypeOf('object');
    expect(plugin.rules['prefer-resizable']).toBeDefined();
  });

  it('exposes a recommended config', () => {
    expect(plugin.configs.recommended).toBeDefined();
    expect(plugin.configs['recommended-legacy']).toBeDefined();
  });
});
