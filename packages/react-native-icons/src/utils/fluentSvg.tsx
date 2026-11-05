import { Svg } from 'react-native-svg';
import type { SvgProps, NumberProp } from 'react-native-svg';
import type { FluentIconsProps } from './FluentIconsProps.types';
import { useIconState } from './useIconState';

/**
 * This is a wrapper around fluent svg props. The FluentSvg sets the size and/or viewbox if not already set.
 *
 * If the size is specified it will be treated as a sized icon with viewbox + height + width all aligned.
 * If not specified it will be treated as resizable with the viewbox set to 0 0 20 20, and height/width set to 24
 */
export type FluentSvgProps = FluentIconsProps<SvgProps> & {
  /**
   * size of the icon, set this for sized icons, leave undefined for resizable
   */
  size?: NumberProp;
};

/**
 * Renders an SVG element with the appropriate size and viewBox based on the provided props.
 * @param props The props for the FluentSvg component.
 * @returns The rendered SVG element with the applied icon state.
 */
export function FluentSvg(props: FluentSvgProps) {
  const { size, ...rest } = props;
  if (!('width' in rest)) rest.width = size ?? 24;
  if (!('height' in rest)) rest.height = size ?? 24;
  if (!('viewBox' in rest)) rest.viewBox = `0 0 ${size ?? 20} ${size ?? 20}`;
  const svgProps = useIconState(rest);
  return <Svg {...svgProps} />;
}
