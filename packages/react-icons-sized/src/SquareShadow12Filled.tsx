import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1a2 2 0 00-2 2v4c0 1.1.9 2 2 2 0 1.1.9 2 2 2h3.5A2.5 2.5 0 0011 8.5V5a2 2 0 00-2-2 2 2 0 00-2-2H3zm-.5 2c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3z" fill={primaryFill} /></svg>;
}

const SquareShadow12Filled = wrapIcon(rawSvg({}), 'SquareShadow12Filled');
export default SquareShadow12Filled;
      