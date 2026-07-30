async function load() {
  const { AirplaneFilled, AirplaneRegular } = await import('@fluentui/react-icons/svg/airplane');
  const { bundleIcon } = await import('@fluentui/react-icons/utils');

  const Airplane = bundleIcon(AirplaneFilled, AirplaneRegular);

  console.log(Airplane);
}

load();

export default { name: 'Dynamic - Bundle Icon' };
