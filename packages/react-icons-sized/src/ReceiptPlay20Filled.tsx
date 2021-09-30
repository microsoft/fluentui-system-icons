import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4c0-1.1.9-2 2-2h7a2 2 0 012 2v7h3v2a3 3 0 01-3 3h-4.2A5.5 5.5 0 004 9.2V4zm11 11a2 2 0 002-2v-1h-2v3zM7.5 5a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 3a.5.5 0 000 1h4a.5.5 0 000-1h-4zm2.5 6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6-1.6v3.2c0 .4.43.63.76.42l2.56-1.6a.5.5 0 000-.84l-2.56-1.6a.5.5 0 00-.76.42z" fill={primaryFill} /></svg>;
}

const ReceiptPlay20Filled = wrapIcon(rawSvg({}), 'ReceiptPlay20Filled');
export default ReceiptPlay20Filled;
      