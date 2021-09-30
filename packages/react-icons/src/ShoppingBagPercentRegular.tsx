import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2c.56 0 1.08.19 1.5.5a2.5 2.5 0 014 2V6h1a1 1 0 011 1v3.88l-1 1V7h-3v2a3 3 0 00-1 .17V7H5v8c0 1.1.9 2 2 2h3.09a1.5 1.5 0 000 1H7a3 3 0 01-3-3V7a1 1 0 011-1h1V4.5A2.5 2.5 0 018.5 2zm0 1C7.67 3 7 3.67 7 4.5V6h3V4.5C10 3.67 9.33 3 8.5 3zm3 0c-.3 0-.6.1-.83.25.2.37.33.8.33 1.25V6h2V4.5c0-.83-.67-1.5-1.5-1.5zm.5 11a2 2 0 100-4 2 2 0 000 4zm0-3a1 1 0 110 2 1 1 0 010-2zm5 8a2 2 0 100-4 2 2 0 000 4zm0-3a1 1 0 110 2 1 1 0 010-2zm.85-4.15a.5.5 0 00-.7-.7l-6 6a.5.5 0 00.7.7l6-6z" fill={primaryFill} /></svg>;
}

const ShoppingBagPercentRegular = wrapIcon(rawSvg({}), 'ShoppingBagPercentRegular');
export default ShoppingBagPercentRegular;
      