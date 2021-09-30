import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 4a1 1 0 00-.9.55l-4 8a1 1 0 00.12 1.08l13 16a1 1 0 001.56 0l13-16a1 1 0 00.11-1.08l-4-8A1 1 0 0025 4H7zm-2.38 8l3-6h4.1l-1.5 6h-5.6zm.48 2h5.17l3.22 10.33L5.1 14zm7.26 0h7.28L16 25.65 12.36 14zm9.38 0h5.16l-8.4 10.33L21.75 14zm5.64-2h-5.6l-1.5-6h4.1l3 6zm-7.66 0h-7.44l1.5-6h4.44l1.5 6z" fill={primaryFill} /></svg>;
}

const Premium32Regular = wrapIcon(rawSvg({}), 'Premium32Regular');
export default Premium32Regular;
      