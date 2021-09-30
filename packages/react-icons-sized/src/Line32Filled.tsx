import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M28.63 3.37c.5.48.5 1.28 0 1.76l-23.5 23.5a1.25 1.25 0 01-1.76-1.76l23.5-23.5a1.25 1.25 0 011.76 0z" fill={primaryFill} /></svg>;
}

const Line32Filled = wrapIcon(rawSvg({}), 'Line32Filled');
export default Line32Filled;
      