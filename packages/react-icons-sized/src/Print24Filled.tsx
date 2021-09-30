import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 17.5v1.25c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 21 6 20 6 18.75V17.5H4.25c-1.24 0-2.25-1-2.25-2.25v-6C2 7.45 3.46 6 5.25 6H6v-.75C6 4.01 7 3 8.25 3h7.5C17 3 18 4 18 5.25V6h.75C20.55 6 22 7.46 22 9.25v6c0 1.24-1 2.25-2.24 2.25H18zm-2.25-4h-7.5a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-4.5a.75.75 0 00-.75-.75zm0-9h-7.5a.75.75 0 00-.75.75V6h9v-.75a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const Print24Filled = wrapIcon(rawSvg({}), 'Print24Filled');
export default Print24Filled;
      