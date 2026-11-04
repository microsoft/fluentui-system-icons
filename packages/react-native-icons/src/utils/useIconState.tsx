import type { SvgProps } from 'react-native-svg';
import type { FluentIconsProps } from './FluentIconsProps.types';
import type { TextProps } from 'react-native';

export const useIconState = <TBaseAttributes extends SvgProps | TextProps = SvgProps>(
  props: FluentIconsProps<TBaseAttributes>,
): Omit<FluentIconsProps<TBaseAttributes>, 'primaryFill'> => {
  const { title, primaryFill = 'currentColor', ...rest } = props;
  const hasAccessibleName = title || rest['aria-label'] || rest['aria-labelledby'];

  return {
    ...rest,
    title: undefined,
    fill: primaryFill,
    ...(title ? { 'aria-label': title } : {}),
    ...(hasAccessibleName ? { role: 'img' } : { 'aria-hidden': true }),
  } as Omit<FluentIconsProps<TBaseAttributes>, 'primaryFill'>;
};
