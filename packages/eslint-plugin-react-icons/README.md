# @fluentui/eslint-plugin-react-icons

ESLint plugin for [`@fluentui/react-icons`](https://github.com/microsoft/fluentui-system-icons/tree/main/packages/react-icons).

## Overview

This ESLint plugin enforces best practices and coding standards when consuming
Fluent UI System and Brand Icons. It helps developers:

- Maintain consistency across `@fluentui/react-icons` usage
- Catch common mistakes and anti-patterns early

> **Note:** This package is in early scaffolding. No rules are shipped yet.

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
      // '@fluentui/react-icons/<rule-name>': 'warn',
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

_No rules are available yet._

## License

This project is licensed under the MIT License.
