import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 13a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M2 6.5A2.5 2.5 0 014.5 4h11A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 13.5v-7zm1 7c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V9H3v4.5zm14-7c0-.83-.67-1.5-1.5-1.5h-11C3.67 5 3 5.67 3 6.5V8h14V6.5z" fill={primaryFill} /></svg>;
}

const Payment20Regular = wrapIcon(rawSvg({}), 'Payment20Regular');
export default Payment20Regular;
      