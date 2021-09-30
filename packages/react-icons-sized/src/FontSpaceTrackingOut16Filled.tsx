import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.7 8.53a.75.75 0 01-1.4 0l-2.24-5.5a.75.75 0 111.38-.56L11 6.27l1.56-3.8a.75.75 0 011.39.56l-2.26 5.5z" fill={primaryFill} /><path d="M5 2c.3 0 .58.18.7.47l2.24 5.5a.75.75 0 11-1.38.56L6.13 7.5H3.87l-.43 1.03a.75.75 0 11-1.38-.56l2.25-5.5A.75.75 0 015 2zm.52 4L5 4.73 4.48 6h1.04z" fill={primaryFill} /><path d="M11.47 10.22c.3-.3.77-.3 1.06 0l1.25 1.25a.75.75 0 010 1.06l-1.25 1.25a.75.75 0 01-1.09-1.03H4.56a.75.75 0 01-1.09 1.03l-1.25-1.25a.75.75 0 010-1.06l1.25-1.25a.75.75 0 011.09 1.03h6.88a.75.75 0 01.03-1.03z" fill={primaryFill} /></svg>;
}

const FontSpaceTrackingOut16Filled = wrapIcon(rawSvg({}), 'FontSpaceTrackingOut16Filled');
export default FontSpaceTrackingOut16Filled;
      