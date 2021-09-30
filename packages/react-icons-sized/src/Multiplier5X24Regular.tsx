import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 7.7c.03-.4.36-.7.75-.7h4.5a.75.75 0 010 1.5h-3.8l-.14 2.13 1.29-.19a3.42 3.42 0 11.48 6.81h-.36a3.78 3.78 0 01-2.8-1.24l-.23-.26a.75.75 0 011.12-1l.23.25c.43.48 1.04.75 1.68.75h.36a1.92 1.92 0 10-.27-3.82l-2.2.31a.75.75 0 01-.86-.79L7 7.7zm7.22 4.52c.3-.3.77-.3 1.06 0l1.22 1.22 1.22-1.22a.75.75 0 011.06 1.06l-1.22 1.22 1.22 1.22a.75.75 0 11-1.06 1.06l-1.22-1.22-1.22 1.22a.75.75 0 01-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 010-1.06zM4.75 17a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const Multiplier5X24Regular = wrapIcon(rawSvg({}), 'Multiplier5X24Regular');
export default Multiplier5X24Regular;
      