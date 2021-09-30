import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.78 3.22a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 001.06 1.06l1.97-1.97 1.97 1.97a.75.75 0 101.06-1.06l-2.5-2.5zM4 6.24C4 5 5 4 6.25 4h4a.75.75 0 010 1.5h-4a.75.75 0 00-.75.75v11.5c0 .42.34.75.75.75h4a.75.75 0 010 1.5h-4C5.01 20 4 19 4 17.74V6.24zm12.78 14.54l2.5-2.5a.75.75 0 10-1.06-1.06l-1.97 1.97-1.97-1.97a.75.75 0 10-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0zM16.25 11a.75.75 0 00-.75.75v.5a.75.75 0 001.5 0v-.5a.75.75 0 00-.75-.75zm-.75 4.25a.75.75 0 011.5 0v1a.75.75 0 01-1.5 0v-1zM16.25 7a.75.75 0 00-.75.75v1a.75.75 0 001.5 0v-1a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowAutofitHeightDotted24Regular = wrapIcon(rawSvg({}), 'ArrowAutofitHeightDotted24Regular');
export default ArrowAutofitHeightDotted24Regular;
      