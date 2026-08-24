// @ts-check

// End-to-end: a *barrel* import is rewritten by the atomic webpack loader
// (headless + fonts) into headless font atoms, then the font-subsetting plugin
// subsets the shared font — and the resulting graph stays Griffel-free.
//
// The headless `styles.css` brings the @font-face (and font files) into the
// module graph; the loader rewrites component imports only, never the CSS
// side-effect import.
import '@fluentui/react-icons/headless/fonts/styles.css';
import { XboxConsole24Filled, BoardGames20Regular, GamesFilled } from '@fluentui/react-icons';

console.log(XboxConsole24Filled, BoardGames20Regular, GamesFilled);
