import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z" fill={primaryFill} /><path d="M5 10a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z" fill={primaryFill} /><path d="M5 14a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z" fill={primaryFill} /><path d="M5 18a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const TextColumnOne24Filled = wrapIcon(rawSvg({}), 'TextColumnOne24Filled');
export default TextColumnOne24Filled;
      