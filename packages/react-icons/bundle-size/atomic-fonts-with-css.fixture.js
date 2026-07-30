// Font icons need both stylesheets: the base rules and the `@font-face` block. Importing
// the second is also what pulls the font binaries into the bundler's dependency graph, so
// this is the fixture that carries the `style-loader` cost documented in
// `docs/bundle-size-rendering-approaches-comparison.md` — keeping it measured means that
// cost is tracked by CI rather than only by a doc that can go stale.
import '@fluentui/react-icons/styles.css';
import '@fluentui/react-icons/fonts/styles.css';
import { AirplaneRegular } from '@fluentui/react-icons/fonts/airplane';

console.log(AirplaneRegular);

export default { name: 'Atomic Fonts + CSS' };
