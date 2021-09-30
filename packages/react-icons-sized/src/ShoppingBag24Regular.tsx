import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 7V5a3 3 0 015-2.24A3 3 0 0117 5v2h1.5c.83 0 1.5.67 1.5 1.5v10a3.5 3.5 0 01-3.5 3.5H8a4 4 0 01-4-4V8.5C4 7.67 4.67 7 5.5 7H7zm6.63 13.5a3.48 3.48 0 01-.62-2v-10H5.5V18A2.5 2.5 0 008 20.5h5.63zM11.5 7V5a1.5 1.5 0 00-3 0v2h3zM13 7h2.5V5a1.5 1.5 0 00-2.66-.96c.1.3.16.63.16.96v2zm1.51 11.5a2 2 0 003.99 0v-10h-3.99v10z" fill={primaryFill} /></svg>;
}

const ShoppingBag24Regular = wrapIcon(rawSvg({}), 'ShoppingBag24Regular');
export default ShoppingBag24Regular;
      