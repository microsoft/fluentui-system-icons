import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 9c.3 0 .58-.18.7-.47l2.24-5.5a.75.75 0 10-1.38-.56l-1.56 3.8-1.56-3.8a.75.75 0 00-1.38.56l2.25 5.5c.11.29.39.47.69.47z" fill={primaryFill} /><path d="M6.2 2.47a.75.75 0 00-1.4 0l-2.24 5.5a.75.75 0 101.38.56l.43-1.03h2.26l.43 1.03a.75.75 0 101.38-.56L6.2 2.47zm-.7 2.26L6.02 6H4.98l.52-1.27z" fill={primaryFill} /><path d="M5.53 10.22a.75.75 0 00-1.09 1.03H2.68a.75.75 0 100 1.5h1.76a.75.75 0 001.1 1.03l1.24-1.25a.75.75 0 000-1.06l-1.25-1.25z" fill={primaryFill} /><path d="M11.53 13.78c-.3.3-.77.3-1.06 0l-1.25-1.25a.75.75 0 010-1.06l1.25-1.25a.75.75 0 011.11 1h1.74a.75.75 0 110 1.5h-1.79c.3.3.3.77 0 1.06z" fill={primaryFill} /></svg>;
}

const FontSpaceTrackingIn16Filled = wrapIcon(rawSvg({}), 'FontSpaceTrackingIn16Filled');
export default FontSpaceTrackingIn16Filled;
      