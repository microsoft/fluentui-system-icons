import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.5V6H5a1 1 0 00-1 1v8a2.93 2.93 0 00.88 2.13A3 3 0 007 18h3.09a1.5 1.5 0 01.35-1.56l.56-.56v-1.05a3 3 0 010-5.66V4.5a2.48 2.48 0 00-.33-1.24 1.48 1.48 0 012.21.66c.08.18.12.37.12.58V6h-1v3a3 3 0 013 2.88l1-1V7a1 1 0 00-1-1h-1V4.5a2.48 2.48 0 00-4-2A2.54 2.54 0 008.5 2a2.42 2.42 0 00-1.77.73A2.43 2.43 0 006 4.5zm4 0V6H7V4.5a1.48 1.48 0 01.91-1.38 1.48 1.48 0 011.97.8c.08.18.12.37.12.58zm2 9.5a2 2 0 100-4 2 2 0 000 4zm0-3a1 1 0 110 2 1 1 0 010-2zm5 8a2 2 0 100-4 2 2 0 000 4zm0-3a1 1 0 110 2 1 1 0 010-2zm.85-4.15a.5.5 0 00-.7-.7l-6 6a.5.5 0 00.7.7l6-6z" fill={primaryFill} /></svg>;
}

const ShoppingBagPercent20Filled = wrapIcon(rawSvg({}), 'ShoppingBagPercent20Filled');
export default ShoppingBagPercent20Filled;
      