async function load() {
  const { AirplaneRegular } = await import('@fluentui/react-icons');
  console.log(AirplaneRegular);
}

load();

export default { name: 'Dynamic - Single Icons' };
