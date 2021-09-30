import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 4a1 1 0 110 2 1 1 0 010-2zm.89 2.8a7.31 7.31 0 01-2.24 4.35.5.5 0 00.7.7C12.47 9.73 13 7.6 13 5a2 2 0 10-1.11 1.8zM5 4a1 1 0 110 2 1 1 0 010-2zm.89 2.8a7.31 7.31 0 01-2.24 4.35.5.5 0 00.7.7C6.47 9.73 7 7.6 7 5a2 2 0 10-1.11 1.8z" fill={primaryFill} /></svg>;
}

const TextQuote16Regular = wrapIcon(rawSvg({}), 'TextQuote16Regular');
export default TextQuote16Regular;
      