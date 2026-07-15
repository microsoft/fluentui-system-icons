// Dynamic barrel imports — the loader canNOT atomize these (a dynamic import()
// returns a runtime namespace whose usage isn't statically known), so each
// barrel import below should surface a warning.

// System icons barrel via top-level await + destructure.
async function loadSystem() {
  const { AddFilled } = await import('@fluentui/react-icons');
  return AddFilled;
}

// Brand icons barrel via .then() member access.
function loadBrand() {
  return import('@fluentui/react-brand-icons').then((m) => m.ProjectColor);
}

// Atomic deep path — this one must NOT warn (already atomic). Uses a distinct
// icon so it's obvious the warnings above are only for the barrel imports.
async function loadAtomic() {
  const { ArrowLeftRegular } = await import('@fluentui/react-icons/svg/arrow-left');
  return ArrowLeftRegular;
}

console.log(loadSystem, loadBrand, loadAtomic);
