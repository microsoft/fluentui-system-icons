import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.22 6.53c.3.3.77.3 1.06 0L8 3.81l2.72 2.72a.75.75 0 101.06-1.06L8.53 2.22a.75.75 0 00-1.06 0L4.22 5.47c-.3.3-.3.77 0 1.06zm0 2.94c.3-.3.77-.3 1.06 0L8 12.19l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25c-.3.3-.77.3-1.06 0l-3.25-3.25a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const ChevronUpDown16Filled = wrapIcon(rawSvg({}), 'ChevronUpDown16Filled');
export default ChevronUpDown16Filled;
      