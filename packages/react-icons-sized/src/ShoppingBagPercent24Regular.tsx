import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5v2H5.5C4.67 7 4 7.67 4 8.5V18a4 4 0 004 4h4.17a1.76 1.76 0 010-1.5H8A2.5 2.5 0 015.5 18V8.5h7.51v2.83c.45-.21.96-.33 1.49-.33h.01V8.5h3.99v5.53l1.5-1.5V8.5c0-.83-.67-1.5-1.5-1.5H17V5a3 3 0 00-5-2.24A3 3 0 007 5zm4.5 0v2h-3V5a1.5 1.5 0 113 0zm4 2H13V5a3 3 0 00-.16-.96A1.5 1.5 0 0115.5 5v2zm-1 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-3.5a1 1 0 110 2 1 1 0 010-2zm6 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-3.5a1 1 0 110 2 1 1 0 010-2zm1.28-5.22a.75.75 0 10-1.06-1.06l-7.5 7.5a.75.75 0 101.06 1.06l7.5-7.5z" fill={primaryFill} /></svg>;
}

const ShoppingBagPercent24Regular = wrapIcon(rawSvg({}), 'ShoppingBagPercent24Regular');
export default ShoppingBagPercent24Regular;
      