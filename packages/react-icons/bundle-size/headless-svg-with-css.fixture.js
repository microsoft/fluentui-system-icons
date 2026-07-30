// The headless API is only complete once the stylesheet is imported — without it an
// icon has no `display`, no RTL flip and no forced-colors handling. `headless-svg`
// measures the JS runtime in isolation; this fixture measures what a consumer of the
// headless SVG API actually pays, and is therefore the one directly comparable with
// the Griffel `Atomic Imports` fixture.
import '@fluentui/react-icons/headless/styles.css';
import { AirplaneRegular } from '@fluentui/react-icons/headless/svg/airplane';

console.log(AirplaneRegular);

export default { name: 'Headless - Single SVG + CSS' };
