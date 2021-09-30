import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 7.35c0-1.8-1.71-3.12-3.46-2.65L4.04 9.63A2.75 2.75 0 002 12.29v3.42c0 1.25.84 2.34 2.05 2.66l2.95.79v.34a4.5 4.5 0 008.56 1.94l6.98 1.86A2.75 2.75 0 0026 20.65V7.35zM8.5 19.55l5.57 1.5a3 3 0 01-5.57-1.5z" fill={primaryFill} /></svg>;
}

const Megaphone28Filled = wrapIcon(rawSvg({}), 'Megaphone28Filled');
export default Megaphone28Filled;
      