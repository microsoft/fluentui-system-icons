import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5v6.5A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0011.5 2H5v3H2zm8 8H6v-2h4v2zm-7-2h2v2h-.5A1.5 1.5 0 013 11.5V11zm7-1H6V6h4v4zM3 6h2v4H3V6zm7-1H6V3h4v2zm1 1h2v4h-2V6zm0 5h2v.5c0 .83-.67 1.5-1.5 1.5H11v-2zm2-6.5V5h-2V3h.5c.83 0 1.5.67 1.5 1.5z" fill={primaryFill} /></svg>;
}

const PuzzleCube16Regular = wrapIcon(rawSvg({}), 'PuzzleCube16Regular');
export default PuzzleCube16Regular;
      