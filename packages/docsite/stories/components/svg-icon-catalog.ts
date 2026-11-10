export type SvgCatalogIcon = {
  path: string;
  name: string;
  size: number;
  style: string;
  packagePath: string;
  assetUrl: string;
};

export function parseSvgIconPath(file: string): SvgCatalogIcon {
  const filename = file.split('/').pop() || '';
  const match = filename.match(/^(.+)_(\d+)_(regular|filled|light|color)\.svg$/);
  if (!match) {
    throw new Error(`Invalid SVG icon filename: ${file}`);
  }
  const [, name, size, style] = match;
  return {
    path: file,
    name,
    size: Number(size),
    style,
    packagePath: `@fluentui/svg-icons/icons/${file}`,
    assetUrl: `./svg-icons/${file.split('/').map(encodeURIComponent).join('/')}`,
  };
}
