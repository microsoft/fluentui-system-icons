// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RESIZABLE_COLLISIONS, SIZED_ICON_SIZES } from './icon-sizes.generated';

const VARIANT_SUFFIX = 'Filled|Regular|Color|Light';

/**
 * Matches a "sized" Fluent icon export name: a two-digit pixel size immediately
 * before the variant suffix, e.g. `AccessTime24Filled`. Sizes are sorted
 * descending so any multi-digit size (should one ever be added) is matched first.
 */
export const SIZED_ICON_RE = new RegExp(
  `(${[...SIZED_ICON_SIZES].sort((a, b) => b - a).join('|')})(${VARIANT_SUFFIX})$`,
);

const collisions = new Set<string>(RESIZABLE_COLLISIONS);

/**
 * Whether an icon export name refers to a fixed-size ("sized") icon variant
 * (e.g. `Send24Regular`) rather than a resizable one (e.g. `SendRegular`).
 *
 * Names that look sized but are actually resizable (a product name ending in a
 * size-shaped number, e.g. `Battery10Regular`) are excluded via the generated
 * collision denylist.
 */
export function isSizedIconName(name: string): boolean {
  return SIZED_ICON_RE.test(name) && !collisions.has(name);
}

/**
 * The resizable equivalent of a sized icon name (the size token stripped), or
 * `null` when the name is not a sized icon. E.g. `Send24Regular` -> `SendRegular`,
 * `PresenceDnd10Filled` -> `PresenceDndFilled`.
 */
export function getResizableIconName(name: string): string | null {
  if (!isSizedIconName(name)) {
    return null;
  }
  return name.replace(SIZED_ICON_RE, '$2');
}
