import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6a3 3 0 013-3h1.5a1 1 0 010 2H5a1 1 0 00-1 1v1.5a1 1 0 01-2 0V6zm14.5-2a1 1 0 011-1H19a3 3 0 013 3v1.5a1 1 0 11-2 0V6a1 1 0 00-1-1h-1.5a1 1 0 01-1-1zM3 15.5a1 1 0 011 1V18a1 1 0 001 1h1.5a1 1 0 110 2H5a3 3 0 01-3-3v-1.5a1 1 0 011-1zm18 0a1 1 0 011 1V18a3 3 0 01-3 3h-1.5a1 1 0 110-2H19a1 1 0 001-1v-1.5a1 1 0 011-1zM6 6.75a1 1 0 011 1v8.5a1 1 0 11-2 0v-8.5a1 1 0 011-1zm5 1a1 1 0 10-2 0v8.5a1 1 0 102 0v-8.5zm3-1a1 1 0 011 1v8.5a1 1 0 11-2 0v-8.5a1 1 0 011-1zm5 1a1 1 0 10-2 0v8.5a1 1 0 102 0v-8.5z" fill={primaryFill} /></svg>;
}

const BarcodeScanner24Filled = wrapIcon(rawSvg({}), 'BarcodeScanner24Filled');
export default BarcodeScanner24Filled;
      