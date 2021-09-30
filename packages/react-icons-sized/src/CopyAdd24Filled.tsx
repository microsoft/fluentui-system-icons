import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6.75V4.63C3.63 4.93 3 5.77 3 6.75v10.5A4.75 4.75 0 007.75 22h5.06c-.42-.44-.79-.94-1.08-1.5H7.75a3.25 3.25 0 01-3.25-3.25V6.75z" fill={primaryFill} /><path d="M19 11.17a6.52 6.52 0 00-7.69 8.33H7.75c-1.24 0-2.25-1-2.25-2.25v-13C5.5 3.01 6.5 2 7.75 2h9C17.99 2 19 3 19 4.25v6.92z" fill={primaryFill} /><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.5 8.5V18h2.5a.5.5 0 000-1H18v-2.5a.5.5 0 10-1 0V17h-2.5a.5.5 0 000 1H17v2.5a.5.5 0 101 0z" fill={primaryFill} /></svg>;
}

const CopyAdd24Filled = wrapIcon(rawSvg({}), 'CopyAdd24Filled');
export default CopyAdd24Filled;
      