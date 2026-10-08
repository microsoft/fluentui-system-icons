// TODO: Deduplicate this copied classifier: https://github.com/microsoft/fluentui-system-icons/issues/1266
import { RESIZABLE_COLLISIONS, SIZED_ICON_SIZES } from './icon-sizes';

const VARIANT_SUFFIX = 'Filled|Regular|Color|Light';

export const SIZED_ICON_RE = new RegExp(
  `(${[...SIZED_ICON_SIZES].sort((first, second) => second - first).join('|')})(${VARIANT_SUFFIX})$`,
);

const collisions = new Set<string>(RESIZABLE_COLLISIONS);

export function isSizedIconName(name: string): boolean {
  return SIZED_ICON_RE.test(name) && !collisions.has(name);
}

export function getResizableIconName(name: string): string | null {
  if (!isSizedIconName(name)) {
    return null;
  }
  return name.replace(SIZED_ICON_RE, '$2');
}
