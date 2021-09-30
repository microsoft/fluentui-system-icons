import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.78 3.28a.75.75 0 10-1.06-1.06L15 7.94l-1.87-1.87a.75.75 0 00-1.06 1.06l2.4 2.4a.75.75 0 001.06 0l6.25-6.25zM6.85 2.1l-1.08.34a3.26 3.26 0 00-2.15 2.4c-.62 2.73.13 6.05 2.26 9.97 2.13 3.91 4.47 6.26 7 7.05 1.08.34 2.24.04 3.06-.77l.81-.82c.77-.77.88-2.02.26-2.92l-1.23-1.81a2.03 2.03 0 00-2.33-.82l-2.28.76a8.68 8.68 0 01-2.27-2.6 8.01 8.01 0 01-1.08-3.17l1.9-1.8c.67-.65.88-1.69.5-2.57l-.85-2.03A2.06 2.06 0 006.85 2.1z" fill={primaryFill} /></svg>;
}

const CallCheckmark24Filled = wrapIcon(rawSvg({}), 'CallCheckmark24Filled');
export default CallCheckmark24Filled;
      