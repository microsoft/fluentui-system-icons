import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.28 2.98a1.73 1.73 0 113.44 0l-.58 4.03a1.15 1.15 0 01-2.28 0l-.58-4.03zm2.45-.14a.73.73 0 10-1.46 0l.58 4.03a.15.15 0 00.3 0l.58-4.03z" fill={primaryFill} /><path d="M6 11a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const Important12Regular = wrapIcon(rawSvg({}), 'Important12Regular');
export default Important12Regular;
      