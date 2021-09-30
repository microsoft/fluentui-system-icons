import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 2C3.01 2 2 3 2 4.25v5A2.75 2.75 0 004.75 12h4.5A2.75 2.75 0 0012 9.25v-5C12 3.01 11 2 9.75 2h-5.5zM3.5 9.25V5h7v4.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25zm3.75 5.25c-1.07 0-2-.61-2.45-1.5H10.25A2.75 2.75 0 0013 10.25V7.14 4.76c.89.42 1.5 1.33 1.5 2.38v3.11c0 2.35-1.9 4.25-4.25 4.25h-3z" fill={primaryFill} /></svg>;
}

const WindowMultiple16Filled = wrapIcon(rawSvg({}), 'WindowMultiple16Filled');
export default WindowMultiple16Filled;
      