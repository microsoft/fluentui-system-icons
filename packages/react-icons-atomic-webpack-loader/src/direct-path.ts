import { getIconFamilyName } from './selector-protocol';

export interface DirectIconPath {
  family: string;
  variant: 'svg' | 'fonts' | 'svg-sprite';
}

export function classifyDirectIconPath(request: string): DirectIconPath | null {
  const match = /^@fluentui\/(react-icons|react-brand-icons)\/(headless\/)?(svg|fonts|svg-sprite)\/([\w-]+)$/.exec(
    request,
  );
  if (!match) {
    return null;
  }

  const [, packageName, headless, variant, family] = match;
  if (packageName === 'react-brand-icons' && variant !== 'svg') {
    return null;
  }
  if (headless && variant === 'svg-sprite') {
    return null;
  }
  return { family, variant: variant as DirectIconPath['variant'] };
}

export function belongsToDirectIconPath(exportName: string, directPath: DirectIconPath): boolean {
  return getIconFamilyName(exportName) === directPath.family;
}
