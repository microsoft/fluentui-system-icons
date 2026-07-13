async function load() {
  const { AirplaneFilled, AirplaneRegular } = await import('@fluentui/react-icons/headless/svg/airplane');
  const { bundleIcon } = await import('@fluentui/react-icons/headless/utils');

  const Airplane = bundleIcon(AirplaneFilled, AirplaneRegular);

  console.log(Airplane);
}

load();

export default { name: 'Dynamic - Headless Bundle Icon' };
