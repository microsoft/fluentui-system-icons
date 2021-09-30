import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 7V5a3 3 0 015-2.24A3 3 0 0117 5v2h1.5c.83 0 1.5.67 1.5 1.5v4.32l-.97-.96a3 3 0 00-.53-.41V8.5h-3.99V11h-.5a3 3 0 00-1 .17V8.5H5.5V18A2.5 2.5 0 008 20.5h5.3l1.47 1.5H8a4 4 0 01-4-4V8.5C4 7.67 4.67 7 5.5 7H7zm4.5 0V5a1.5 1.5 0 00-3 0v2h3zM13 7h2.5V5a1.5 1.5 0 00-2.66-.96c.1.3.16.63.16.96v2zm-.43 11.33l4 4.07a2 2 0 002.86.02l2.99-3a2 2 0 00-.01-2.83l-4.08-4.01a2 2 0 00-1.41-.58H14a2 2 0 00-2 2v2.93a2 2 0 00.57 1.4zM16 15a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const ShoppingBagTag24Regular = wrapIcon(rawSvg({}), 'ShoppingBagTag24Regular');
export default ShoppingBagTag24Regular;
      