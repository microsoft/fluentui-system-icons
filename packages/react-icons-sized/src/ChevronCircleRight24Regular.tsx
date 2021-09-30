import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm1.5 0a8.5 8.5 0 1017 0 8.5 8.5 0 00-17 0zm6.47 4.53a.75.75 0 010-1.06L13.44 12 9.97 8.53a.75.75 0 011.06-1.06l4 4c.3.3.3.77 0 1.06l-4 4c-.3.3-.77.3-1.06 0z" fill={primaryFill} /></svg>;
}

const ChevronCircleRight24Regular = wrapIcon(rawSvg({}), 'ChevronCircleRight24Regular');
export default ChevronCircleRight24Regular;
      