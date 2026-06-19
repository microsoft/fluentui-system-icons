// @ts-check

// Headless font icons: the atom imports drive icon *usage* tracking, while
// `headless/fonts/styles.css` brings the `@font-face` declarations (and the
// referenced font files) into the module graph so the subsetting plugin has
// assets to subset. In a real app this CSS import is required for headless fonts.
import '@fluentui/react-icons/headless/fonts/styles.css';
import { XboxConsole24Filled } from '@fluentui/react-icons/headless/fonts/xbox-console';
import { BoardGames20Regular } from '@fluentui/react-icons/headless/fonts/board-games';
import { GamesFilled } from '@fluentui/react-icons/headless/fonts/games';

console.log('headless atomic fonts loaded');
console.dir({
  XboxConsole24Filled,
  BoardGames20Regular,
  GamesFilled,
});
