import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v7c0 .51.15.98.41 1.38L6.8 8.49a1.7 1.7 0 012.4 0l4.39 4.39c.26-.4.41-.87.41-1.38v-7A2.5 2.5 0 0011.5 2h-7zm7 3.5a1 1 0 11-2 0 1 1 0 012 0zm1.38 8.09L8.5 9.2a.7.7 0 00-1 0L3.13 13.6c.4.26.87.41 1.38.41h7c.5 0 .98-.15 1.38-.41z" fill={primaryFill} /></svg>;
}

const Image16Filled = wrapIcon(rawSvg({}), 'Image16Filled');
export default Image16Filled;
      