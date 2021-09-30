import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 7V5a3 3 0 015-2.24A3 3 0 0117 5v2h1.5c.83 0 1.5.67 1.5 1.5V18a4 4 0 01-1.82 3.36l-.55-.1a4.17 4.17 0 01-2.17-1.17c-.6-.61-.96-1.35-.96-2.09V7h1V5a1.5 1.5 0 00-2.66-.96c.1.3.16.63.16.96v13c0 1.23.58 2.33 1.39 3.14.32.33.68.62 1.08.86H8a4 4 0 01-4-4V8.5C4 7.67 4.67 7 5.5 7H7zm1.5-2v2h3V5a1.5 1.5 0 00-3 0z" fill={primaryFill} /></svg>;
}

const ShoppingBag24Filled = wrapIcon(rawSvg({}), 'ShoppingBag24Filled');
export default ShoppingBag24Filled;
      