import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.75A2.75 2.75 0 014.75 3h1.5a.75.75 0 010 1.5h-1.5c-.69 0-1.25.56-1.25 1.25v1.5a.75.75 0 01-1.5 0v-1.5zm15-2c0-.41.34-.75.75-.75h1.5A2.75 2.75 0 0122 5.75v1.5a.75.75 0 01-1.5 0v-1.5c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 01-.75-.75zM2.75 16c.41 0 .75.34.75.75v1.5c0 .69.56 1.25 1.25 1.25h1.5a.75.75 0 010 1.5h-1.5A2.75 2.75 0 012 18.25v-1.5c0-.41.34-.75.75-.75zm18.5 0c.41 0 .75.34.75.75v1.5A2.75 2.75 0 0119.25 21h-1.5a.75.75 0 010-1.5h1.5c.69 0 1.25-.56 1.25-1.25v-1.5c0-.41.34-.75.75-.75zM5.75 7c.41 0 .75.34.75.75v8.5a.75.75 0 01-1.5 0v-8.5c0-.41.34-.75.75-.75zm4.75.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5zM13.75 7c.41 0 .75.34.75.75v8.5a.75.75 0 01-1.5 0v-8.5c0-.41.34-.75.75-.75zm4.75.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5z" fill={primaryFill} /></svg>;
}

const BarcodeScanner24Regular = wrapIcon(rawSvg({}), 'BarcodeScanner24Regular');
export default BarcodeScanner24Regular;
      