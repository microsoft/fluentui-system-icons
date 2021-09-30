import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 5.43a1.5 1.5 0 00-2.65-.97L11.27 9.3a2 2 0 01-1.53.71H6a4 4 0 00-4 4v4a4 4 0 004 4h3.74a2 2 0 011.53.7l4.08 4.84a1.5 1.5 0 002.65-.97V5.43z" fill={primaryFill} /></svg>;
}

const Speaker032Filled = wrapIcon(rawSvg({}), 'Speaker032Filled');
export default Speaker032Filled;
      