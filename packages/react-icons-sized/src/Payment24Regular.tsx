import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 14.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" fill={primaryFill} /><path d="M4.75 5A2.75 2.75 0 002 7.75v8.5A2.75 2.75 0 004.75 19h14.5A2.75 2.75 0 0022 16.25v-8.5A2.75 2.75 0 0019.25 5H4.75zM3.5 16.25V11h17v5.25c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25zm0-6.75V7.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25V9.5h-17z" fill={primaryFill} /></svg>;
}

const Payment24Regular = wrapIcon(rawSvg({}), 'Payment24Regular');
export default Payment24Regular;
      