// @ts-check
// Same font family as its async sibling: both icons are sized+Filled, so one emitted font file has
// to carry glyphs contributed from two different chunks.
import { Games24Filled } from '@fluentui/react-icons/fonts/games';

console.dir({ Games24Filled });

import('./lazy-shared-family.async').then((m) => console.dir(m));
