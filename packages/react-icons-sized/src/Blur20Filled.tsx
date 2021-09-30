import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 105.3 14H10v-1h6.25a8 8 0 00.68-1H10v-1h7.42c.13-.32.24-.66.33-1H10v-1h7.94c.04-.33.06-.66.06-1h-8V9h7.94c-.04-.34-.1-.67-.2-1H10V7h7.42c-.14-.35-.3-.68-.49-1H10V5h6.25c-.3-.36-.61-.7-.96-1H10V3h3.88A7.96 7.96 0 0010 2z" fill={primaryFill} /></svg>;
}

const Blur20Filled = wrapIcon(rawSvg({}), 'Blur20Filled');
export default Blur20Filled;
      