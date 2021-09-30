import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 6.41V10a1 1 0 11-2 0V6.41l-.3.3a1 1 0 11-1.4-1.42l2-2a1 1 0 011.4 0l2 2a1 1 0 01-1.4 1.42l-.3-.3z" fill={primaryFill} /><path d="M2 6a1 1 0 011-1h8a1 1 0 110 2H3a1 1 0 01-1-1z" fill={primaryFill} /><path d="M2 12a1 1 0 011-1h11a1 1 0 110 2H3a1 1 0 01-1-1z" fill={primaryFill} /><path d="M3 17a1 1 0 100 2h8a1 1 0 100-2H3z" fill={primaryFill} /><path d="M20 14v3.59l.3-.3a1 1 0 011.4 1.42l-2 2a1 1 0 01-1.4 0l-2-2a1 1 0 011.4-1.42l.3.3V14a1 1 0 112 0z" fill={primaryFill} /></svg>;
}

const TextLineSpacing24Filled = wrapIcon(rawSvg({}), 'TextLineSpacing24Filled');
export default TextLineSpacing24Filled;
      