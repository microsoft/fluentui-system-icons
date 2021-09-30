import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.97 4.22c.3-.3.77-.3 1.06 0l8.75 8.75a.75.75 0 010 1.06l-8.75 8.75a.75.75 0 11-1.06-1.06l8.22-8.22-8.22-8.22a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const ChevronRight28Regular = wrapIcon(rawSvg({}), 'ChevronRight28Regular');
export default ChevronRight28Regular;
      