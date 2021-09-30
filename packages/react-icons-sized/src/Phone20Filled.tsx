import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2C5.67 2 5 2.67 5 3.5v13c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-7zM9 14h2a.5.5 0 010 1H9a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const Phone20Filled = wrapIcon(rawSvg({}), 'Phone20Filled');
export default Phone20Filled;
      