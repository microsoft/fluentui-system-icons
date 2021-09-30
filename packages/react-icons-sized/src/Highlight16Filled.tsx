import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 1a1 1 0 00-1 1v2.5A1.5 1.5 0 003.45 6h.1-.05 9a.5.5 0 00-.05 0h.1A1.5 1.5 0 0014 4.5V2a1 1 0 00-1-1H3z" fill={primaryFill} /><path d="M3 7c0 1.1.9 2 2 2h6a2 2 0 002-2H3z" fill={primaryFill} /><path d="M5 14.5V10h6v.74c0 .51-.26.99-.69 1.26l-4.54 2.92A.5.5 0 015 14.5z" fill={primaryFill} /></svg>;
}

const Highlight16Filled = wrapIcon(rawSvg({}), 'Highlight16Filled');
export default Highlight16Filled;
      