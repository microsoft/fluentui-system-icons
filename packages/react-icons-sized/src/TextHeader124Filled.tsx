import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.18 5.02A1 1 0 0121 6.04V18a1 1 0 11-2 0V9.61a5.66 5.66 0 01-2.18 1.34 1 1 0 01-.64-1.9c1.13-.37 2.19-1.33 2.86-3.34a1 1 0 011.14-.7zM3 5a1 1 0 011 1v5h6V6a1 1 0 112 0v12a1 1 0 11-2 0v-5H4v5a1 1 0 11-2 0V6a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const TextHeader124Filled = wrapIcon(rawSvg({}), 'TextHeader124Filled');
export default TextHeader124Filled;
      