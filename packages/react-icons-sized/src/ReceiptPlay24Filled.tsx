import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.25C5 3.01 6 2 7.25 2h8.5C16.99 2 18 3 18 4.25V12h3.5v3.25c0 1.8-1.46 3.25-3.25 3.25h-5.33a6.55 6.55 0 00-.65-4h1.98a.75.75 0 000-1.5h-3.06A6.48 6.48 0 005 11.17V4.25zM18 17h.25c.97 0 1.75-.78 1.75-1.75V13.5h-2V17zM8.75 6a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM5 14.96v5.08c0 .4.46.64.79.4l3.62-2.53a.5.5 0 000-.82L5.8 14.55a.5.5 0 00-.79.41z" fill={primaryFill} /></svg>;
}

const ReceiptPlay24Filled = wrapIcon(rawSvg({}), 'ReceiptPlay24Filled');
export default ReceiptPlay24Filled;
      