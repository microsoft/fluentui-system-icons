async function load() {
  // Whole-barrel dynamic import. Intentionally does NOT log the namespace:
  // a dynamic/namespace access (e.g. `icons[name]`) forces webpack to retain
  // the ENTIRE icon set (~16 MB async chunk), which makes the bundle-size
  // measurement extremely slow. Statically-destructured usage tree-shakes, so
  // this fixture only exercises the barrel resolution + async-chunk wiring.
  const all = await import('@fluentui/react-icons');
  // uncomment to DEMO the ~16 MB async chunk retention (and the resulting bundle-size regression):
  // console.log(all)
}

load();

export default { name: 'Dynamic - Import All (barrel)' };
