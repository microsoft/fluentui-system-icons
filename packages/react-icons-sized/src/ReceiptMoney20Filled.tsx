import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h7a2 2 0 012 2v7h3v2a3 3 0 01-3 3h-4v-2.5A2.5 2.5 0 008.5 11H4V4zm11 11a2 2 0 002-2v-1h-2v3zM7.5 5a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zm1 5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 011 16.5v-3c0-.83.67-1.5 1.5-1.5h6zm.5 4.5v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5zm0-3a.5.5 0 01-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1zM2.5 13a.5.5 0 01-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1zM2 16.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1zm3.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const ReceiptMoney20Filled = wrapIcon(rawSvg({}), 'ReceiptMoney20Filled');
export default ReceiptMoney20Filled;
      