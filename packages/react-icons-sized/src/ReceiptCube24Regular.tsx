import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 2C6.01 2 5 3 5 4.25v7.14c.48-.21 1-.26 1.5-.16V4.25c0-.41.34-.75.75-.75h8.5c.41 0 .75.34.75.75V17H12v1.5h6.25c1.8 0 3.25-1.46 3.25-3.25V12H18V4.25C18 3.01 17 2 15.75 2h-8.5zm11 15H18v-3.5h2v1.75c0 .97-.78 1.75-1.75 1.75zm-7.63-3.8c.17.08.33.18.47.3h3.16a.75.75 0 000-1.5h-5.5a.75.75 0 00-.35.08l2.22 1.11zM8.75 5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM1 19.57v-4.14c0-.57.32-1.1.83-1.34l3.5-1.75a1.5 1.5 0 011.34 0l3.5 1.75c.5.25.83.77.83 1.34v4.14a1.5 1.5 0 01-.83 1.34l-3.5 1.75a1.5 1.5 0 01-1.34 0l-3.5-1.75A1.5 1.5 0 011 19.57zm1.55-4.04a.5.5 0 00.23.67l2.72 1.36v2.94a.5.5 0 101 0v-2.94l2.72-1.36a.5.5 0 10-.44-.9L6 16.7l-2.78-1.4a.5.5 0 00-.67.23z" fill={primaryFill} /></svg>;
}

const ReceiptCube24Regular = wrapIcon(rawSvg({}), 'ReceiptCube24Regular');
export default ReceiptCube24Regular;
      