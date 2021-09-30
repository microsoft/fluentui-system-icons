import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.03 22.78c-.3.3-.77.3-1.06 0l-8.75-8.75a.75.75 0 010-1.06l8.75-8.75a.75.75 0 111.06 1.06L9.81 13.5l8.22 8.22c.3.3.3.77 0 1.06z" fill={primaryFill} /></svg>;
}

const ChevronLeft28Regular = wrapIcon(rawSvg({}), 'ChevronLeft28Regular');
export default ChevronLeft28Regular;
      