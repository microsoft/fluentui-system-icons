import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a4 4 0 103.12 6.5H10v-1h3.7c.14-.32.23-.65.27-1H10v-1h3.97a3.97 3.97 0 00-.26-1H10v-1h3.12A4 4 0 0010 2z" fill={primaryFill} /><path d="M5 11a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0010 18c1.7 0 3.28-.32 4.52-1H10v-1h5.84c.28-.3.52-.64.7-1H10v-1h6.9c.06-.32.1-.65.1-1h-7v-1h6.73A2 2 0 0015 11H5z" fill={primaryFill} /></svg>;
}

const InprivateAccount20Filled = wrapIcon(rawSvg({}), 'InprivateAccount20Filled');
export default InprivateAccount20Filled;
      