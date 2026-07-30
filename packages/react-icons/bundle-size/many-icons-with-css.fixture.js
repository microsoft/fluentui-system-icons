// The 35-icon fixture WITH the mandatory stylesheet import — what a consumer of the icon
// package actually pays. `many-icons` measures the JS runtime in isolation; this one is the
// honest comparison, and the fixture that keeps the headline numbers in
// `docs/bundle-size-rendering-approaches-comparison.md` under CI.
import '@fluentui/react-icons/styles.css';
// 35 icons — the same sample size `docs/bundle-size-rendering-approaches-comparison.md`
// used. Every other fixture imports a single icon, where the fixed cost of the CSS loader
// runtime dominates and the per-icon cost is invisible. This pair (with `many-icons`) is
// the only one measured at a scale a real consumer reaches, and comparing the two is what
// proves that cost is per-application rather than per-icon.
import {
  AirplaneFilled,
  AirplaneRegular,
  Airplane16Regular,
  Airplane16Filled,
  Airplane20Regular,
  Airplane20Filled,
  Airplane24Regular,
  Airplane24Filled,
  Airplane28Regular,
  Airplane28Filled,
  Airplane32Regular,
  Airplane32Filled,
  Airplane48Regular,
  Airplane48Filled,
} from '@fluentui/react-icons/svg/airplane';
import {
  ArchiveFilled,
  ArchiveRegular,
  Archive16Regular,
  Archive16Filled,
  Archive20Regular,
  Archive20Filled,
  Archive24Regular,
  Archive24Filled,
  Archive28Regular,
  Archive28Filled,
  Archive32Regular,
  Archive32Filled,
  Archive32Light,
  Archive48Regular,
  Archive48Filled,
} from '@fluentui/react-icons/svg/archive';
import {
  ArrowLeftFilled,
  ArrowLeftRegular,
  ArrowLeft12Regular,
  ArrowLeft12Filled,
  ArrowLeft16Regular,
  ArrowLeft16Filled,
} from '@fluentui/react-icons/svg/arrow-left';

console.log(
  AirplaneFilled,
  AirplaneRegular,
  Airplane16Regular,
  Airplane16Filled,
  Airplane20Regular,
  Airplane20Filled,
  Airplane24Regular,
  Airplane24Filled,
  Airplane28Regular,
  Airplane28Filled,
  Airplane32Regular,
  Airplane32Filled,
  Airplane48Regular,
  Airplane48Filled,
  ArchiveFilled,
  ArchiveRegular,
  Archive16Regular,
  Archive16Filled,
  Archive20Regular,
  Archive20Filled,
  Archive24Regular,
  Archive24Filled,
  Archive28Regular,
  Archive28Filled,
  Archive32Regular,
  Archive32Filled,
  Archive32Light,
  Archive48Regular,
  Archive48Filled,
  ArrowLeftFilled,
  ArrowLeftRegular,
  ArrowLeft12Regular,
  ArrowLeft12Filled,
  ArrowLeft16Regular,
  ArrowLeft16Filled,
);

export default { name: '35 Icons + CSS' };
