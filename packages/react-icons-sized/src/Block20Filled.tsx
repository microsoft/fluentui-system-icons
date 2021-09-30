import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm3.5 7.5H6.41a.5.5 0 00.09 1h7.09a.5.5 0 00-.09-1z" fill={primaryFill} /></svg>;
}

const Block20Filled = wrapIcon(rawSvg({}), 'Block20Filled');
export default Block20Filled;
      