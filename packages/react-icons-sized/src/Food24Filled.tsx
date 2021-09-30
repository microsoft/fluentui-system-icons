import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3a1 1 0 011 .88V20a1 1 0 01-2 .12V15h-1a1 1 0 01-1-.88V8c0-2.2 1.5-5 3-5zm-6 0a1 1 0 011 .88V9a4 4 0 01-3 3.87V20a1 1 0 01-2 .12v-7.25a4 4 0 01-3-3.66V4a1 1 0 012-.12V9a2 2 0 001 1.73V4a1 1 0 012-.12V10.73a2 2 0 001-1.56V4a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const Food24Filled = wrapIcon(rawSvg({}), 'Food24Filled');
export default Food24Filled;
      