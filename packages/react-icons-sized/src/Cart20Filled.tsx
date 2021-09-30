import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.5c0-.28.22-.5.5-.5h.44c.72 0 1.14.47 1.38.94.17.32.29.72.39 1.06H16a1 1 0 01.96 1.27l-1.5 5.28A2 2 0 0113.55 13H8.46a2 2 0 01-1.93-1.47L5.9 9.17l-.01-.03-1.03-3.5-.1-.33a5.2 5.2 0 00-.32-.91c-.16-.31-.3-.4-.5-.4H3.5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M8.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /><path d="M13.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
}

const Cart20Filled = wrapIcon(rawSvg({}), 'Cart20Filled');
export default Cart20Filled;
      