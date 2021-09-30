import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.13 4.35a1.25 1.25 0 011.73 0c2.76 2.64 6.69 4.08 10.04 4.84a35.65 35.65 0 005.86.81h.02c.68.02 1.22.57 1.22 1.25V21c0 9.5-5.06 19.02-17.63 22.94-.24.08-.5.08-.74 0-6.24-1.95-10.67-5.29-13.53-9.42A23.95 23.95 0 016 20.75v-9.5c0-.68.54-1.23 1.22-1.25h.02a9.4 9.4 0 00.41-.02l1.25-.1c1.06-.11 2.54-.32 4.2-.7 3.35-.75 7.28-2.19 10.03-4.83zm9.48 14.8a1.25 1.25 0 10-1.72-1.8L20.77 27l-3.64-3.63a1.25 1.25 0 00-1.76 1.76l4.5 4.5c.48.48 1.25.5 1.74.02l11-10.5z" fill={primaryFill} /></svg>;
}

const ShieldTask48Filled = wrapIcon(rawSvg({}), 'ShieldTask48Filled');
export default ShieldTask48Filled;
      