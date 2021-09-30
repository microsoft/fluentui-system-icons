import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.85 1.15l9 9a.5.5 0 01-.7.7l-.78-.77a.8.8 0 01-1.15.52L6 9.43 3.78 10.6a.8.8 0 01-1.16-.85l.42-2.47-1.8-1.76a.8.8 0 01.45-1.36l1.54-.22-2.08-2.09a.5.5 0 11.7-.7zm6.38 7.79L4.11 4.82l-1.88.27 1.58 1.54a.8.8 0 01.23.71l-.37 2.18L5.63 8.5a.8.8 0 01.74 0l1.96 1.03-.1-.58z" fill={primaryFill} /><path d="M9.77 5.1l-1.3 1.25.71.71 1.58-1.54a.8.8 0 00-.44-1.36L7.83 3.8 6.72 1.55a.8.8 0 00-1.44 0l-.53 1.08.75.74.5-1.02.98 1.99c.12.23.34.4.6.43l2.2.32z" fill={primaryFill} /></svg>;
}

const StarOff12Regular = wrapIcon(rawSvg({}), 'StarOff12Regular');
export default StarOff12Regular;
      