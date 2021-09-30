import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 016.98 6.5H3.02A7 7 0 0110 3z" fill={primaryFill} /></svg>;
}

const CircleHalfFillRegular = wrapIcon(rawSvg({}), 'CircleHalfFillRegular');
export default CircleHalfFillRegular;
      