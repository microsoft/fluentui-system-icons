import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.22 9.47c.3-.3.77-.3 1.06 0L14 18.19l8.72-8.72a.75.75 0 111.06 1.06l-9.25 9.25c-.3.3-.77.3-1.06 0l-9.25-9.25a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const ChevronDown28Regular = wrapIcon(rawSvg({}), 'ChevronDown28Regular');
export default ChevronDown28Regular;
      