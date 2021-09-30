import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5v2H5.5C4.67 7 4 7.67 4 8.5V18a4 4 0 004 4h4.17c-.31-.65-.2-1.45.34-1.99l.71-.7A4 4 0 0113 18v-.34a3.5 3.5 0 010-6.32V5a3 3 0 00-.16-.96A1.5 1.5 0 0115.5 5v2h-1v4a3.5 3.5 0 013.5 3.5v.03l2-2V8.5c0-.83-.67-1.5-1.5-1.5H17V5a3 3 0 00-5-2.24A3 3 0 007 5zm1.5 2V5a1.5 1.5 0 113 0v2h-3zm6 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-3.5a1 1 0 110 2 1 1 0 010-2zm6 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-3.5a1 1 0 110 2 1 1 0 010-2zm1.28-5.22a.75.75 0 10-1.06-1.06l-7.5 7.5a.75.75 0 101.06 1.06l7.5-7.5z" fill={primaryFill} /></svg>;
}

const ShoppingBagPercent24Filled = wrapIcon(rawSvg({}), 'ShoppingBagPercent24Filled');
export default ShoppingBagPercent24Filled;
      