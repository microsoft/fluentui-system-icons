import { create } from 'storybook/theming';

const theme = create({
  base: 'light',
  colorPrimary: 'rgba(255, 255, 255, .4)',
  colorSecondary: '#0078d4',
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e0e0e0',
  appBorderRadius: 4,
  fontBase:
    '"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;',
  fontCode: 'monospace',
  textColor: '#11100f',
  textInverseColor: '#0078d4',
  barSelectedColor: '#0078d4',
  inputBorderRadius: 4,
  brandTitle: 'Fluent UI System Icons',
  brandUrl: 'https://github.com/microsoft/fluentui-system-icons',
});

export default theme;
