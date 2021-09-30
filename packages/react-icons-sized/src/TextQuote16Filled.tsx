import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.65 11.15a7.31 7.31 0 002.24-4.36A2 2 0 1113 5c0 2.6-.53 4.74-2.65 6.86a.5.5 0 01-.7-.7zm-6 0a7.31 7.31 0 002.24-4.36A2 2 0 117 5c0 2.6-.53 4.74-2.65 6.86a.5.5 0 01-.7-.7z" fill={primaryFill} /></svg>;
}

const TextQuote16Filled = wrapIcon(rawSvg({}), 'TextQuote16Filled');
export default TextQuote16Filled;
      