import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6.25C5 5.01 6 4 7.25 4h8.5C16.99 4 18 5 18 6.25V14h3.5v3.25c0 1.8-1.46 3.25-3.25 3.25H13v-4h1.25a.75.75 0 000-1.5H12.5a2.5 2.5 0 00-2-1H5V6.25zM18 19h.25c.97 0 1.75-.78 1.75-1.75V15.5h-2V19zM8.75 8a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM1 16.5c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 011 20.5v-4zm10 .5a1 1 0 01-1-1H9c0 1.1.9 2 2 2v-1zm0 2a2 2 0 00-2 2h1a1 1 0 011-1v-1zm-8-3a1 1 0 01-1 1v1a2 2 0 002-2H3zm1 5a2 2 0 00-2-2v1a1 1 0 011 1h1zm4.25-2.5a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0z" fill={primaryFill} /></svg>;
}

const ReceiptMoney24Filled = wrapIcon(rawSvg({}), 'ReceiptMoney24Filled');
export default ReceiptMoney24Filled;
      