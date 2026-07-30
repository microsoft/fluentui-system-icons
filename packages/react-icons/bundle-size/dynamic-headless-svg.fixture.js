async function load() {
  const { AirplaneRegular } = await import('@fluentui/react-icons/headless/svg/airplane');
  console.log(AirplaneRegular);
}

load();

export default { name: 'Dynamic - Headless Single SVG' };
