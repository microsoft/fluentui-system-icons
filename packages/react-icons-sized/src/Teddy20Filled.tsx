import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3a3.5 3.5 0 00-2.85 5.53 7.92 7.92 0 015.5-4.32A3.5 3.5 0 005.5 3zM18 6.5c0 .76-.24 1.46-.65 2.03a7.92 7.92 0 00-5.5-4.32A3.5 3.5 0 0118 6.5zm-15 5C3 7.87 6.17 5 10 5s7 2.87 7 6.5a6.2 6.2 0 01-1.76 4.31 5.5 5.5 0 00-10.48 0A6.2 6.2 0 013 11.5zm8.33 1.7a4.5 4.5 0 013.07 3.35A7.33 7.33 0 0110 18c-1.66 0-3.2-.54-4.4-1.45a4.5 4.5 0 013.07-3.35 1.5 1.5 0 002.66 0z" fill={primaryFill} /></svg>;
}

const Teddy20Filled = wrapIcon(rawSvg({}), 'Teddy20Filled');
export default Teddy20Filled;
      