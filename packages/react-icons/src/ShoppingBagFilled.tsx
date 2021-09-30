import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6V4.5a2.42 2.42 0 01.73-1.77A2.43 2.43 0 018.5 2a2.43 2.43 0 011.5.5 2.44 2.44 0 012.48-.3 2.53 2.53 0 011.32 1.33c.13.3.2.63.2.97V6h1a1 1 0 011 1v8a2.95 2.95 0 01-1.47 2.58l-.59-.26-.5-.22-.2-.11-.23-.17-.24-.21-.27-.29A2 2 0 0112 15V6h1V4.5a1.47 1.47 0 00-.44-1.06A1.48 1.48 0 0011.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0111 4.5V15a2.95 2.95 0 00.77 2l.3.33.31.27.31.23.31.17H7a3 3 0 01-3-3V7a1 1 0 011-1h1zm1 0h3V4.5a1.47 1.47 0 00-.44-1.06A1.48 1.48 0 008.5 3a1.47 1.47 0 00-1.06.44A1.48 1.48 0 007 4.5V6z" fill={primaryFill} /></svg>;
}

const ShoppingBagFilled = wrapIcon(rawSvg({}), 'ShoppingBagFilled');
export default ShoppingBagFilled;
      