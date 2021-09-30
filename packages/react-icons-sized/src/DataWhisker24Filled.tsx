import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 2a.75.75 0 000 1.5h1V5h-.5C5.01 5 4 6 4 7.25V11h7V7.25C11 6.01 10 5 8.75 5h-.5V3.5h1a.75.75 0 000-1.5h-3.5z" fill={primaryFill} /><path d="M5.75 18a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-1v-1.5h.5c1.24 0 2.25-1 2.25-2.25V12.5H4v1.75c0 1.24 1 2.25 2.25 2.25h.5V18h-1z" fill={primaryFill} /><path d="M14 4.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-1V7h.5C18.99 7 20 8 20 9.25V11h-7V9.25C13 8.01 14 7 15.25 7h.5V5.5h-1a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M13 16.25V12.5h7v3.75c0 1.24-1 2.25-2.25 2.25h-.5V20h1a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5h1v-1.5h-.5c-1.24 0-2.25-1-2.25-2.25z" fill={primaryFill} /></svg>;
}

const DataWhisker24Filled = wrapIcon(rawSvg({}), 'DataWhisker24Filled');
export default DataWhisker24Filled;
      