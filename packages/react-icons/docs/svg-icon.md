# SvgIcon Component

A React component that renders Fluent UI System Icons from an SVG sprite, maintaining the same styling and behavior as icons created with `createFluentIcon`.

## Benefits

- **Smaller bundle size**: No inline SVG paths in JavaScript bundles
- **Better browser caching**: The sprite file can be cached separately
- **Access all icons**: Use any icon without importing each one individually
- **Same API**: Uses the same props and styling as regular Fluent Icons
- **Performance**: Reduces initial JavaScript payload

## Usage

### Basic Example

```tsx
import { SvgIcon } from '@fluentui/react-icons';

function MyComponent() {
  return <SvgIcon iconId="CalendarFilled" />;
}
```

### With Custom Size

```tsx
<SvgIcon iconId="AirplaneRegular" size="24" />
<SvgIcon iconId="BackpackFilled" size="32" />
```

### With Custom Color

```tsx
<SvgIcon iconId="AlertFilled" primaryFill="red" />
<SvgIcon iconId="CalendarRegular" primaryFill="currentColor" />
```

### Size-Specific Icons

Use the same icon IDs as the regular icon exports:

```tsx
<SvgIcon iconId="Airplane16Filled" size="16" />
<SvgIcon iconId="Airplane20Filled" size="20" />
<SvgIcon iconId="Airplane24Filled" size="24" />
<SvgIcon iconId="Airplane28Filled" size="28" />
<SvgIcon iconId="Airplane32Filled" size="32" />
<SvgIcon iconId="Airplane48Filled" size="48" />
```

### RTL Support

```tsx
<SvgIcon iconId="CalendarRegular" flipInRtl />
```

### Accessibility

```tsx
<SvgIcon iconId="AlertFilled" title="Alert notification" />
<SvgIcon iconId="InfoFilled" aria-label="Information" />
```

### Custom Sprite Path

By default, the sprite is loaded from `/lib/svg/all.svg`. You can customize this:

```tsx
<SvgIcon iconId="CalendarFilled" spritePath="/assets/icons/sprite.svg" />
```

### With Custom Class Names

```tsx
<SvgIcon iconId="CalendarFilled" className="my-custom-class" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `iconId` | `string` | **required** | The icon identifier from the SVG sprite (e.g., "CalendarFilled") |
| `size` | `string` | `"1em"` | The width and height of the icon |
| `primaryFill` | `string` | `"currentColor"` | The fill color for the icon |
| `spritePath` | `string` | `"/lib/svg/all.svg"` | Path to the SVG sprite file |
| `flipInRtl` | `boolean` | `false` | Whether the icon should flip in RTL mode |
| `className` | `string` | - | Additional CSS classes |
| `title` | `string` | - | Accessible title for the icon |
| `aria-label` | `string` | - | ARIA label for accessibility |

All other standard SVG attributes are also supported.

## Setup

### 1. Include the Sprite

Make sure the SVG sprite file is accessible in your app. The sprite is located at:

```
packages/react-icons/lib/svg/all.svg
```

Serve this file from your static assets directory or CDN.

### 2. Configure Your Build

If using a bundler, ensure the sprite file is copied to your output directory:

**Webpack:**
```js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'node_modules/@fluentui/react-icons/lib/svg', to: 'lib/svg' }
      ],
    }),
  ],
};
```

**Vite:**
```js
export default {
  publicDir: 'public',
  // Copy sprite to public folder or configure as asset
};
```

## Comparison with createFluentIcon

### Before (Individual Icon Imports)

```tsx
import { CalendarFilled, AirplaneRegular, AlertFilled } from '@fluentui/react-icons';

function MyComponent() {
  return (
    <>
      <CalendarFilled />
      <AirplaneRegular />
      <AlertFilled />
    </>
  );
}
```

**Bundle Impact**: Each icon adds ~1-5KB to your bundle.

### After (SvgIcon with Sprite)

```tsx
import { SvgIcon } from '@fluentui/react-icons';

function MyComponent() {
  return (
    <>
      <SvgIcon iconId="CalendarFilled" />
      <SvgIcon iconId="AirplaneRegular" />
      <SvgIcon iconId="AlertFilled" />
    </>
  );
}
```

**Bundle Impact**: Only the `SvgIcon` component (~2KB) + sprite file (cached separately).

## Finding Icon IDs

Icon IDs match the export names of regular icons. To find available icons:

1. Check the [Fluent UI System Icons catalog](https://aka.ms/fluentui-system-icons)
2. Use the same name as the React component export
3. Examples:
   - `CalendarFilled` → `<SvgIcon iconId="CalendarFilled" />`
   - `AirplaneRegular` → `<SvgIcon iconId="AirplaneRegular" />`
   - `Airplane24Filled` → `<SvgIcon iconId="Airplane24Filled" size="24" />`

## Total Available Icons

The sprite contains **5,300+ icons** including all sizes and variants (Filled, Regular, Light).

## Performance Considerations

### Advantages
- **Smaller JavaScript bundles**: No inline SVG paths in JS
- **Better caching**: Sprite file can be cached indefinitely
- **On-demand loading**: Only load the sprite when needed
- **HTTP/2 friendly**: Single file request for all icons

### Trade-offs
- **Initial sprite load**: ~2.67 MB sprite file (but cached)
- **Extra HTTP request**: One additional request for the sprite
- **Build complexity**: Need to serve the sprite file

### Recommendations
- Use SvgIcon for apps using many icons (10+)
- Use individual imports for apps using few icons (1-5)
- Consider code-splitting: load sprite only when needed
- Enable compression (gzip/brotli) for the sprite file

## Browser Support

Works in all modern browsers that support:
- SVG `<use>` element
- External SVG references

This includes all browsers supported by Fluent UI React.

## TypeScript

Full TypeScript support included:

```tsx
import { SvgIcon, SvgIconProps } from '@fluentui/react-icons';

const MyIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  return <SvgIcon iconId={iconName} size="20" />;
};
```
