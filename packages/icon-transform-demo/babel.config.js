// @ts-check
const { resolveFluentIconImport } = require('./fluent-icons-transform');

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true }, modules: false }],
    ['@babel/preset-react', { runtime: 'classic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    // [
    //   'transform-imports',
    //   {
    //     '@fluentui/react-icons': {
    //       // Rewrites barrel imports to atomic SVG imports:
    //       //   import { AddRegular } from '@fluentui/react-icons'
    //       //   → import { AddRegular } from '@fluentui/react-icons/svg/add'
    //       transform: (importName) => resolveFluentIconImport(importName, 'svg-sprite'),
    //       preventFullImport: false,
    //       skipDefaultConversion: true,
    //     },
    //   },
    // ],
  ],
};
