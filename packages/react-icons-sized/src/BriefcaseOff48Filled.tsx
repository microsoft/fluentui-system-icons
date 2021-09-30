import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M37.87 39.63l4 4a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76L12.23 14A6.25 6.25 0 006 20.25v13.5C6 37.2 8.8 40 12.25 40h23.5c.74 0 1.45-.13 2.12-.37zM42 33.75c0 .87-.18 1.7-.5 2.45L19.3 14H29V8.5H19v5.2l-2.5-2.5V7.25c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25V14h4.25C39.2 14 42 16.8 42 20.25v13.5z" fill={primaryFill} /></svg>;
}

const BriefcaseOff48Filled = wrapIcon(rawSvg({}), 'BriefcaseOff48Filled');
export default BriefcaseOff48Filled;
      