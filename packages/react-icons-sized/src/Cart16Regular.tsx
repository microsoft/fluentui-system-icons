import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 2a.5.5 0 000 1h.25a.5.5 0 01.48.36L4.8 8.91A1.5 1.5 0 006.25 10h4.57a1.5 1.5 0 001.4-.94l1.47-3.69A1 1 0 0012.76 4H4.45l-.26-.91A1.5 1.5 0 002.75 2H2.5zm3.27 6.64L4.73 5h8.03L11.3 8.69a.5.5 0 01-.47.31H6.25a.5.5 0 01-.48-.36z" fill={primaryFill} /><path d="M6.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-1a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /><path d="M10.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-1a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const Cart16Regular = wrapIcon(rawSvg({}), 'Cart16Regular');
export default Cart16Regular;
      