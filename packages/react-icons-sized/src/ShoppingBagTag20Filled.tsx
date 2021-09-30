import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6V4.5a2.42 2.42 0 01.73-1.77A2.43 2.43 0 018.5 2a2.43 2.43 0 011.5.5 2.44 2.44 0 012.48-.3 2.53 2.53 0 011.32 1.33c.13.3.2.63.2.97V6h1a1 1 0 011 1v2.6a2.5 2.5 0 00-1.62-.6H12V6h1V4.5a1.47 1.47 0 00-.44-1.06A1.48 1.48 0 0011.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0111 4.5v4.55c-1.14.24-2 1.25-2 2.46v2.88c0 .66.26 1.29.72 1.76L11.53 18H7a3 3 0 01-3-3V7a1 1 0 011-1h1zm4 0V4.5a1.47 1.47 0 00-.44-1.06A1.48 1.48 0 008.5 3a1.47 1.47 0 00-1.06.44A1.48 1.48 0 007 4.5V6h3zm.43 9.45a1.51 1.51 0 01-.43-1.06v-2.88c0-.83.68-1.51 1.51-1.51h2.87c.4 0 .8.16 1.07.45l3.11 3.14c.6.6.58 1.57-.02 2.15l-2.95 2.84a1.5 1.5 0 01-2.12-.03l-3.04-3.1zm1.57-2.7a.75.75 0 101.5 0 .75.75 0 00-1.5 0z" fill={primaryFill} /></svg>;
}

const ShoppingBagTag20Filled = wrapIcon(rawSvg({}), 'ShoppingBagTag20Filled');
export default ShoppingBagTag20Filled;
      