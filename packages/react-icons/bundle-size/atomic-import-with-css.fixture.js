// An icon is only complete once the stylesheet is imported — without it there is no
// `display`, no RTL flip and no forced-colors handling. `atomic-import` measures the JS
// runtime in isolation; this fixture measures what a consumer actually pays.
import '@fluentui/react-icons/styles.css';
import { AirplaneRegular } from '@fluentui/react-icons/svg/airplane';

console.log(AirplaneRegular);

export default { name: 'Atomic Imports + CSS' };
