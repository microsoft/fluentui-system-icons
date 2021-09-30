import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 11v7h-3A2.5 2.5 0 014 15.66V11h5.5zm6.5 0v4.5a2.5 2.5 0 01-2.34 2.5H10.5v-7H16zm-4-9a2.5 2.5 0 012 4h2a1 1 0 011 1v2a1 1 0 01-1 1h-5.5V6h-1v4H4a1 1 0 01-1-1V7a1 1 0 011-1h2a2.5 2.5 0 114-3c.46-.6 1.18-1 2-1zm0 1c-.83 0-1.5.67-1.5 1.5V6H12a1.5 1.5 0 000-3zM8 3a1.5 1.5 0 00-.14 3H9.5V4.36A1.5 1.5 0 008 3z" fill={primaryFill} /></svg>;
}

const Gift20Filled = wrapIcon(rawSvg({}), 'Gift20Filled');
export default Gift20Filled;
      