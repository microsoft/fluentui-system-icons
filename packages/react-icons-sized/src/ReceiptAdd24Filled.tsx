import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.25C5 3.01 6 2 7.25 2h8.5C16.99 2 18 3 18 4.25V12h3.5v3.25c0 1.8-1.46 3.25-3.25 3.25h-5.33a6.55 6.55 0 00-1.3-5h2.63a.75.75 0 000-1.5H9.97A6.47 6.47 0 005 11.17V4.25zM18 17h.25c.97 0 1.75-.78 1.75-1.75V13.5h-2V17zM8.75 5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm3.25 9a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM7 18v2.5a.5.5 0 11-1 0V18H3.5a.5.5 0 010-1H6v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H7z" fill={primaryFill} /></svg>;
}

const ReceiptAdd24Filled = wrapIcon(rawSvg({}), 'ReceiptAdd24Filled');
export default ReceiptAdd24Filled;
      