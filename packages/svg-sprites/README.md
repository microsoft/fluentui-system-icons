# Fluent UI System Icons (svg)

This package provides the Fluent UI System Icons as SVG sprites, which allow user agents to request and cache icons at runtime instead of depending on this project monolithically.

## Usage

For security reasons, most user agents require the sprites to be served from the same hostname, protocol and port. During development, requests can be proxied to a specific release on e.g. jsdelivr which you have vetted for integrity, a bucket in the cloud, or served from the service’s file system.

For Storybook, `middleware.js` allows the configuration of `http-proxy-middleware` like so:

```js
const { createProxyMiddleware } = require('http-proxy-middleware')

const expressMiddleWare = (router) => {
  router.use(
    '/sprites',
    createProxyMiddleware({
      target: 'http://cdn.jsdelivr.net/npm/@fluentui/svg-sprites',
      changeOrigin: true,
      followRedirects: true,
    })
  )
}

module.exports = expressMiddleWare
```

Sprites can then be consumed by the client like so:

```tsx
export const Icon = (props: IconProps) => {
  const { icon, variant = 'regular', size = 20 } = props
  const assetId = `${icon}_${size}_${variant}`
  return (
    <svg>
      <use href={`/sprites/${assetId}.sprite.svg#${assetId}`} />
    </svg>
  )
}
```

## Development

### Building Sprites

Generate sprite files from source icons:

```bash
npm run build
```

This will:
1. Copy icons from assets
2. Rename files
3. Remove fills
4. Optimize SVGs
5. Generate sprites (using parallel processing for fast generation)

### Custom Build Options

The sprite generator supports command-line options for advanced use cases:

```bash
# Use custom directories
node generate-sprites.js --icons ./custom-icons --output ./custom-sprites

# Control parallelization (useful for limited CPU environments)
node generate-sprites.js --workers 4

# Auto-detect CPU cores (default)
node generate-sprites.js --workers 0

# Show help
node generate-sprites.js --help
```

Options:
- `--icons, -i`: Path to icons directory (default: `./icons`)
- `--output, -o`: Path to output sprites directory (default: `./sprites`)
- `--workers, -w`: Number of parallel workers, 0 = auto-detect CPU cores (default: `0`)
