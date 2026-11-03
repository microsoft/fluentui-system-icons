export const loadIcons = async () => {
  const { AddFilled, AddRegular } = await import('@fluentui/react-icons');
  return { AddFilled, AddRegular };
};
