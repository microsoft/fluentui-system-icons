import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.86 6.5A3.5 3.5 0 016.36 3h15a3.5 3.5 0 013.5 3.5v15a3.5 3.5 0 01-3.5 3.5h-15a3.5 3.5 0 01-3.5-3.5v-15zM6.36 5c-.83 0-1.5.67-1.5 1.5v15c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5h-15z" fill={primaryFill} /></svg>;
}

const Tab28Filled = wrapIcon(rawSvg({}), 'Tab28Filled');
export default Tab28Filled;
      