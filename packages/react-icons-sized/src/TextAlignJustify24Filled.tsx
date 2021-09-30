import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z" fill={primaryFill} /><path d="M2 18a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z" fill={primaryFill} /><path d="M3 11a1 1 0 100 2h18a1 1 0 100-2H3z" fill={primaryFill} /></svg>;
}

const TextAlignJustify24Filled = wrapIcon(rawSvg({}), 'TextAlignJustify24Filled');
export default TextAlignJustify24Filled;
      