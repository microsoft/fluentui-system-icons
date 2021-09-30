import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5V3a2 2 0 013-1.73A2 2 0 0111 3v2h.5c.83 0 1.5.67 1.5 1.5V13a2 2 0 01-2 2H5a2 2 0 01-2-2V6.5C3 5.67 3.67 5 4.5 5H5zm1-2v2h2V3a1 1 0 00-2 0zm5 11a1 1 0 001-1V6.5a.5.5 0 00-.5-.5H10v7a1 1 0 001 1zM9 6H4.5a.5.5 0 00-.5.5V13a1 1 0 001 1h4.27A2 2 0 019 13V6zm0-3v2h1V3a1 1 0 00-1.25-.97A2 2 0 019 3z" fill={primaryFill} /></svg>;
}

const ShoppingBag16Regular = wrapIcon(rawSvg({}), 'ShoppingBag16Regular');
export default ShoppingBag16Regular;
      