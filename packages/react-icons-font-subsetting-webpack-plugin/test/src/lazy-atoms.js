// @ts-check
// The eager half. Its sibling is reachable only through a dynamic import, so the two icons land in
// different chunks — and, deliberately, in different font families.
import { GamesFilled } from '@fluentui/react-icons/fonts/games';

console.dir({ GamesFilled });

import('./lazy-atoms.async').then((m) => console.dir(m));
