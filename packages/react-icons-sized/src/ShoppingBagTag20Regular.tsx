import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2.5a2.5 2.5 0 00-4 2V6H5a1 1 0 00-1 1v8a3 3 0 003 3h4.53l-.98-1H7a2 2 0 01-2-2V7h6v2.05c.16-.03.34-.05.51-.05H12V7h3v2.08c.37.09.7.27 1 .51V7a1 1 0 00-1-1h-1V4.5a2.5 2.5 0 00-4-2zm-3 2a1.5 1.5 0 113 0V6H7V4.5zm3.67-1.25A1.5 1.5 0 0113 4.5V6h-2V4.5c0-.45-.12-.88-.33-1.25zm-.24 12.2a1.51 1.51 0 01-.43-1.06v-2.88c0-.83.68-1.51 1.51-1.51h2.87c.4 0 .8.16 1.07.45l3.11 3.14c.6.6.58 1.57-.02 2.15l-2.95 2.84a1.5 1.5 0 01-2.12-.03l-3.04-3.1zm1.57-2.7a.75.75 0 101.5 0 .75.75 0 00-1.5 0z" fill={primaryFill} /></svg>;
}

const ShoppingBagTag20Regular = wrapIcon(rawSvg({}), 'ShoppingBagTag20Regular');
export default ShoppingBagTag20Regular;
      