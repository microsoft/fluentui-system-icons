import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 4a5.5 5.5 0 100 11h5a5.5 5.5 0 100-11h-5zM6 7.5a.5.5 0 011 0V9h1.5a.5.5 0 010 1H7v1.5a.5.5 0 01-1 0V10H4.5a.5.5 0 010-1H6V7.5zm9 .5a1 1 0 11-2 0 1 1 0 012 0zm-3 4a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const Games20Filled = wrapIcon(rawSvg({}), 'Games20Filled');
export default Games20Filled;
      