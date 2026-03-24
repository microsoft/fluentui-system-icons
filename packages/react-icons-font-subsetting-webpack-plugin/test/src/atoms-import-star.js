// @ts-check
// Uses `import *` — webpack still tracks individual property accesses
// in production mode, so only the referenced icons below end up in the
// subset font.
//
// The `atomsImportStar` entry has a higher size threshold
// in webpack.config.js to accommodate the larger subset.
import * as XboxConsoleGroup from '@fluentui/react-icons/fonts/xbox-console';
import * as BoardGamesGroup from '@fluentui/react-icons/fonts/board-games';
import * as GamesGroup from '@fluentui/react-icons/fonts/games';

console.log('atomic fonts loaded - import STAR syntax');
console.dir({
  XboxConsoleGroup,
  BoardGamesGroup,
  GamesGroup: [
    GamesGroup.GamesRegular,
    GamesGroup.Games16Regular,
    GamesGroup.Games24Regular,
    GamesGroup.Games28Regular,
    GamesGroup.Games32Regular,
    GamesGroup.Games48Regular,
    GamesGroup.GamesFilled,
    GamesGroup.Games16Filled,
    GamesGroup.Games24Filled,
    GamesGroup.Games28Filled,
    GamesGroup.Games32Filled,
    GamesGroup.Games48Filled,
  ],
});
