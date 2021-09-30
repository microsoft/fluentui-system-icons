import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v10.5a2.75 2.75 0 002.75 2.74h7.82a2.5 2.5 0 01.17-3.34l4.91-4.92a2.5 2.5 0 013.53 0l.8.8V6.75A2.75 2.75 0 0019.24 4H4.74zm15.73 8.44a1.5 1.5 0 00-2.12 0l-3.11 3.1 4.2 4.21 3.11-3.1a1.5 1.5 0 000-2.13l-2.08-2.08zm-7.04 4.92l1.1-1.1 4.2 4.2-1.1 1.1a1.5 1.5 0 01-2.11 0l-2.09-2.08a1.5 1.5 0 010-2.13z" fill={primaryFill} /></svg>;
}

const SlideEraser24Filled = wrapIcon(rawSvg({}), 'SlideEraser24Filled');
export default SlideEraser24Filled;
      