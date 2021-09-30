import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.89 3.75a6.24 6.24 0 00-3.12.9L5.68 3.56a7.73 7.73 0 013.67-1.28l-.59-.59A.75.75 0 019.82.63l2.12 2.12c.3.3.3.77 0 1.06L9.82 5.93a.75.75 0 11-1.06-1.06L9.9 3.75zM4.18 4.88a7.75 7.75 0 001.18 11.33.75.75 0 00.9-1.2 6.25 6.25 0 01-1.02-9.06l8.81 8.8a6.23 6.23 0 01-3.94 1.5l1.13-1.12a.75.75 0 10-1.06-1.06l-2.12 2.12c-.3.29-.3.76 0 1.06l2.12 2.12a.75.75 0 101.06-1.06l-.59-.59a7.72 7.72 0 004.47-1.9l2.03 2.03a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7l2.03 2.03zm11.17 8.35l1.09 1.09a7.75 7.75 0 00-1.8-10.53.75.75 0 00-.9 1.2 6.25 6.25 0 011.6 8.24z" fill={primaryFill} /></svg>;
}

const ArrowSyncOff20Filled = wrapIcon(rawSvg({}), 'ArrowSyncOff20Filled');
export default ArrowSyncOff20Filled;
      