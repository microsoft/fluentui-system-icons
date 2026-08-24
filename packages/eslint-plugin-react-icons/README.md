# @fluentui/eslint-plugin-react-icons

ESLint plugin for [`@fluentui/react-icons`](https://github.com/microsoft/fluentui-system-icons/tree/main/packages/react-icons).

## Overview

This ESLint plugin enforces best practices and coding standards when consuming
Fluent UI System and Brand Icons. It helps developers:

- Maintain consistency across `@fluentui/react-icons` usage
- Catch common mistakes and anti-patterns early

## Installation

```bash
# npm
npm install --save-dev @fluentui/eslint-plugin-react-icons

# yarn
yarn add --dev @fluentui/eslint-plugin-react-icons

# pnpm
pnpm add --save-dev @fluentui/eslint-plugin-react-icons
```

## Usage

### Flat Config (ESLint 9+, recommended)

Add the plugin to your `eslint.config.js`:

```js
const fluentuiReactIcons = require('@fluentui/eslint-plugin-react-icons');

module.exports = [
  fluentuiReactIcons.configs.recommended,
  // Your other configs...
];
```

Or configure individual rules manually:

```js
const fluentuiReactIcons = require('@fluentui/eslint-plugin-react-icons');

module.exports = [
  {
    plugins: {
      '@fluentui/react-icons': fluentuiReactIcons,
    },
    rules: {
      '@fluentui/react-icons/prefer-resizable': 'warn',
    },
  },
];
```

### Legacy Config (ESLint 8 and below)

Add the plugin to your `.eslintrc.js`:

```js
module.exports = {
  plugins: ['@fluentui/react-icons'],
  extends: ['plugin:@fluentui/react-icons/recommended-legacy'],
};
```

## Available Rules

💼 Configurations enabled in.\
🔧 Whether the rule has an auto-fixer and/or has suggestions.

| Name                                                 | Description                                                       | 💼  | 🔧  |
| ---------------------------------------------------- | ----------------------------------------------------------------- | --- | --- |
| [prefer-resizable](./docs/rules/prefer-resizable.md) | Prefer resizable Fluent icons over fixed-size ("sized") variants. | ✅  | 💡  |

💼 ✅ = enabled in the `recommended` config (as `warn`).\
🔧 = fixable , 💡 = has suggestions.

## License

This project is licensed under the MIT License.
