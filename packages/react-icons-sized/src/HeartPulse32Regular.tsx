import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.37 5.99c3-2.86 7.73-2.8 10.66.13l.97.97.86-.86a7.7 7.7 0 0112.6 8.27h-2.22a5.7 5.7 0 00-8.97-6.86l-1.56 1.57a1 1 0 01-1.42 0l-1.67-1.68a5.63 5.63 0 00-8.76 6.97H2.61a7.63 7.63 0 011.76-8.51z" fill={primaryFill} /><path d="M22.7 19.5h2.77l-8.75 9.19a1 1 0 01-1.45 0l-8.6-9.19h2.47l.25-.01 6.62 7.05 6.7-7.04z" fill={primaryFill} /><path d="M12.9 11.55a1 1 0 00-1.76-.06L8.44 16H2.66a1 1 0 100 2H9a1 1 0 00.86-.49l2.06-3.43 3.19 6.37a1 1 0 001.7.14l3.37-4.64 2.18 1.82A1 1 0 0023 18h6a1 1 0 000-2h-5.64l-2.72-2.27a1 1 0 00-1.45.18l-3.03 4.17-3.27-6.53z" fill={primaryFill} /></svg>;
}

const HeartPulse32Regular = wrapIcon(rawSvg({}), 'HeartPulse32Regular');
export default HeartPulse32Regular;
      