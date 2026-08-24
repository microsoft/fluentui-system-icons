// allowDynamicImports: the barrel dynamic import is atomized into per-icon
// dynamic imports (names from different atoms → positional Promise.all).
async function load() {
  const { AddFilled, ArrowLeftRegular } = await import('@fluentui/react-icons');
  console.log(AddFilled, ArrowLeftRegular);
}

load();
