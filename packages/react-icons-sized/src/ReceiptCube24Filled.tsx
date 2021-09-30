import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 2C6.01 2 5 3 5 4.25v7.14a2.5 2.5 0 012.12.05l1.28.64c.1-.05.23-.08.35-.08h5.5a.75.75 0 010 1.5h-3.16c.57.47.91 1.17.91 1.93v3.07h6.25c1.8 0 3.25-1.46 3.25-3.25V12H18V4.25C18 3.01 17 2 15.75 2h-8.5zm11 15H18v-3.5h2v1.75c0 .97-.78 1.75-1.75 1.75zM8 5.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 018 5.75zm0 3.5c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 018 9.25zM1 19.57v-4.14c0-.57.32-1.1.83-1.34l3.5-1.75a1.5 1.5 0 011.34 0l3.5 1.75c.5.25.83.77.83 1.34v4.14a1.5 1.5 0 01-.83 1.34l-3.5 1.75a1.5 1.5 0 01-1.34 0l-3.5-1.75A1.5 1.5 0 011 19.57zm1.55-4.04a.5.5 0 00.23.67l2.72 1.36v2.94a.5.5 0 101 0v-2.94l2.72-1.36a.5.5 0 10-.44-.9L6 16.7l-2.78-1.4a.5.5 0 00-.67.23z" fill={primaryFill} /></svg>;
}

const ReceiptCube24Filled = wrapIcon(rawSvg({}), 'ReceiptCube24Filled');
export default ReceiptCube24Filled;
      