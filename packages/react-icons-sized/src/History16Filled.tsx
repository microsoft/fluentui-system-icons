import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.65 5h.6a.75.75 0 010 1.5h-2.5A.75.75 0 012 5.75v-2.5a.75.75 0 011.5 0v.78A5.99 5.99 0 0114 8a6 6 0 01-11.94.86.75.75 0 011.49-.22A4.5 4.5 0 104.65 5zm3.1 0c.41 0 .75.34.75.75V7.5h.75a.75.75 0 010 1.5h-1.5A.75.75 0 017 8.25v-2.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const History16Filled = wrapIcon(rawSvg({}), 'History16Filled');
export default History16Filled;
      