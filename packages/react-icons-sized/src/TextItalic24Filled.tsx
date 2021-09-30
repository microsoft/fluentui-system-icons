import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.65 18.5h3.85a1 1 0 010 2H5a1 1 0 01-1-1 1 1 0 011-1h3.5L13.34 6H10a1 1 0 010-2h8.5a1 1 0 010 2h-3.02l-4.83 12.5z" fill={primaryFill} /></svg>;
}

const TextItalic24Filled = wrapIcon(rawSvg({}), 'TextItalic24Filled');
export default TextItalic24Filled;
      