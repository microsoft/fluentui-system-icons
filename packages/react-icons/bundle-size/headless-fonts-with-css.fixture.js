// Font icons need both stylesheets: the base rules and the `@font-face` block that
// Griffel emits at runtime via `makeStaticStyles`. This is the fixture that carries
// the `style-loader` regression documented in
// `docs/bundle-size-rendering-approaches-comparison.md` — keeping it measured means the
// regression is tracked by CI rather than only by a doc that can go stale.
import '@fluentui/react-icons/headless/styles.css';
import '@fluentui/react-icons/headless/fonts/styles.css';
import { AirplaneRegular } from '@fluentui/react-icons/headless/fonts/airplane';

console.log(AirplaneRegular);

export default { name: 'Headless - Single Fonts + CSS' };
