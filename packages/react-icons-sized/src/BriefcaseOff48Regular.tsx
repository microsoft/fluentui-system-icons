import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M37.87 39.63l4 4a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76L12.23 14A6.25 6.25 0 006 20.25v13.5C6 37.2 8.8 40 12.25 40h23.5c.74 0 1.45-.13 2.12-.37zm-2.14-2.13H12.25a3.75 3.75 0 01-3.75-3.75v-13.5a3.75 3.75 0 013.75-3.75h2.48l21 21zm3.77-3.75c0 .14 0 .28-.02.42l2.02 2.03c.32-.75.5-1.58.5-2.45v-13.5C42 16.8 39.2 14 35.75 14H31.5V7.25c0-.69-.56-1.25-1.25-1.25h-12.5c-.69 0-1.25.56-1.25 1.25v3.95l2.5 2.5V8.5h10V14h-9.7l2.5 2.5h13.95a3.75 3.75 0 013.75 3.75v13.5z" fill={primaryFill} /></svg>;
}

const BriefcaseOff48Regular = wrapIcon(rawSvg({}), 'BriefcaseOff48Regular');
export default BriefcaseOff48Regular;
      