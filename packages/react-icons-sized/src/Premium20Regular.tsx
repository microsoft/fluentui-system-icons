import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3a.5.5 0 00-.43.24l-3 5a.5.5 0 00.05.58l7.5 9a.5.5 0 00.76 0l7.5-9a.5.5 0 00.05-.58l-3-5A.5.5 0 0014.5 3h-9zM3.38 8l2.4-4h1.98l-1.6 4H3.38zm2.78 1l2.26 5.83L3.57 9h2.59zM10 16.12L7.23 9h5.54L10 16.12zM7.24 8l1.6-4h2.32l1.6 4H7.24zm6.6 0l-1.6-4h1.98l2.4 4h-2.78zm0 1h2.6l-4.86 5.83L13.84 9z" fill={primaryFill} /></svg>;
}

const Premium20Regular = wrapIcon(rawSvg({}), 'Premium20Regular');
export default Premium20Regular;
      