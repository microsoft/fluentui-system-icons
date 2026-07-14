async function load() {
  const { AirplaneRegular } = await import('@fluentui/react-icons/svg/airplane');
  console.log(AirplaneRegular);
}

load();

export default { name: 'Dynamic - Atomic Imports' };
