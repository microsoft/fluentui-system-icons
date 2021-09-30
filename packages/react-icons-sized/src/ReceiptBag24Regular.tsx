import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 2C6.01 2 5 3 5 4.25v5.29c.26.03.51.1.75.19.24-.1.49-.16.75-.2V4.26c0-.41.34-.75.75-.75h8.5c.41 0 .75.34.75.75V17h-5v1.5h6.75c1.8 0 3.25-1.46 3.25-3.25V12H18V4.25C18 3.01 17 2 15.75 2h-8.5zm11 15H18v-3.5h2v1.75c0 .97-.78 1.75-1.75 1.75zm-7.28-3.5h3.28a.75.75 0 000-1.5h-3.9c.1.32.15.65.15 1v.17c.18.08.34.2.47.33zM8.8 10h5.45a.75.75 0 000-1.5h-5.5a.75.75 0 00-.6 1.2c.23.07.45.18.65.3zm-.05-5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM1 14.75c0-.41.34-.75.75-.75H2v-1a2.5 2.5 0 013.75-2.17A2.5 2.5 0 019.5 13v1h.25c.41 0 .75.34.75.75v6c0 1.24-1 2.25-2.25 2.25h-5C2.01 23 1 22 1 20.75v-6zM7 13v1h1v-1a1 1 0 00-1.2-.98c.13.3.2.63.2.98zm-1.5 1v-1a1 1 0 00-2 0v1h2z" fill={primaryFill} /></svg>;
}

const ReceiptBag24Regular = wrapIcon(rawSvg({}), 'ReceiptBag24Regular');
export default ReceiptBag24Regular;
      