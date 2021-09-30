import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 7.25a.75.75 0 00-1.5 0v4.9a2 2 0 101.5 0v-4.9z" fill={primaryFill} /><path d="M6.5 5.5a3.5 3.5 0 017 0v5.67A4.48 4.48 0 0110 18.5a4.5 4.5 0 01-3.5-7.33V5.5zm1.5 0v6.24l-.2.22a3 3 0 104.4 0l-.2-.22V5.5a2 2 0 00-4 0z" fill={primaryFill} /></svg>;
}

const Temperature20Filled = wrapIcon(rawSvg({}), 'Temperature20Filled');
export default Temperature20Filled;
      