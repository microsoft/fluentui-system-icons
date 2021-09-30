import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6.25C5 5.01 6 4 7.25 4h8.5C16.99 4 18 5 18 6.25V14h3.5v3.25c0 1.8-1.46 3.25-3.25 3.25H13V19h3.5V6.25a.75.75 0 00-.75-.75h-8.5a.75.75 0 00-.75.75V14H5V6.25zM18 19h.25c.97 0 1.75-.78 1.75-1.75V15.5h-2V19zm-3.75-2.5H13c0-.56-.19-1.08-.5-1.5h1.75a.75.75 0 010 1.5zM8 8.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 018 8.75zm0 3.5c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM1 16.5c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 011 20.5v-4zm10 .5a1 1 0 01-1-1H9c0 1.1.9 2 2 2v-1zm0 2a2 2 0 00-2 2h1a1 1 0 011-1v-1zm-8-3a1 1 0 01-1 1v1a2 2 0 002-2H3zm1 5a2 2 0 00-2-2v1a1 1 0 011 1h1zm4.25-2.5a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0z" fill={primaryFill} /></svg>;
}

const ReceiptMoney24Regular = wrapIcon(rawSvg({}), 'ReceiptMoney24Regular');
export default ReceiptMoney24Regular;
      