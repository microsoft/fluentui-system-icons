import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm1 0v6h1V3H3z" fill={primaryFill} /><path d="M7 3a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1H8a1 1 0 01-1-1V3zm1 0v6h1V3H8z" fill={primaryFill} /></svg>;
}

const Pause12Regular = wrapIcon(rawSvg({}), 'Pause12Regular');
export default Pause12Regular;
      