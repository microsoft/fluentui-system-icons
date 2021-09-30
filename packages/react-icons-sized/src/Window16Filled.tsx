import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.25C2 3.01 3 2 4.25 2h7.5C12.99 2 14 3 14 4.25v7A2.75 2.75 0 0111.25 14h-6.5A2.75 2.75 0 012 11.25v-7zM3.5 5v6.25c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V5h-9z" fill={primaryFill} /></svg>;
}

const Window16Filled = wrapIcon(rawSvg({}), 'Window16Filled');
export default Window16Filled;
      