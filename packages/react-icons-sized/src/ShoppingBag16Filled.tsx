import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5V3a2 2 0 013-1.73A2 2 0 0111 3v2h.5c.83 0 1.5.67 1.5 1.5V13a2 2 0 01-1.73 1.98A1.5 1.5 0 0110 13.5V3a1 1 0 00-1.25-.97A2 2 0 019 3v10.5c0 .56.19 1.08.5 1.5H5a2 2 0 01-2-2V6.5C3 5.67 3.67 5 4.5 5H5zm1-2v2h2V3a1 1 0 00-2 0z" fill={primaryFill} /></svg>;
}

const ShoppingBag16Filled = wrapIcon(rawSvg({}), 'ShoppingBag16Filled');
export default ShoppingBag16Filled;
      