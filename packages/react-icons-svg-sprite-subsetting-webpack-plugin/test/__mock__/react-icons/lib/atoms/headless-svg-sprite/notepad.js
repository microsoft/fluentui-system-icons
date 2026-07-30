"use client";
// Deliberately the SAME factory as the standard atoms. The headless implementation was
// promoted to the default, so `./headless/svg-sprite/*` is an alias of `./svg-sprite/*`
// pointing at the same files and there is no second factory left to mirror. This directory
// stays so the plugin's detection of the `atoms/headless-svg-sprite/` path shape — which
// previously published builds emit — keeps a fixture.
import { createFluentIcon } from '../../util-factory.js';
import sprite from './notepad.svg';
export const NotepadFilled = ( /*#__PURE__*/createFluentIcon('NotepadFilled', "1em", sprite));
export const NotepadRegular = ( /*#__PURE__*/createFluentIcon('NotepadRegular', "1em", sprite));
export const Notepad20Filled = ( /*#__PURE__*/createFluentIcon('Notepad20Filled', "20", sprite));
export const Notepad20Regular = ( /*#__PURE__*/createFluentIcon('Notepad20Regular', "20", sprite));
