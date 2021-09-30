import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.54 2.23a.75.75 0 00-1.08 0L5.2 8.73a.75.75 0 101.08 1.04L12 3.83l5.7 5.94a.75.75 0 101.1-1.04l-6.26-6.5zm0 19.54a.75.75 0 01-1.08 0l-6.25-6.5a.75.75 0 111.08-1.04L12 20.17l5.7-5.94a.75.75 0 111.1 1.04l-6.26 6.5z" fill={primaryFill} /></svg>;
}

const ChevronUpDown24Regular = wrapIcon(rawSvg({}), 'ChevronUpDown24Regular');
export default ChevronUpDown24Regular;
      