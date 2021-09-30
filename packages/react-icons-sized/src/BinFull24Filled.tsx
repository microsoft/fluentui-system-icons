import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.16 3.38a.75.75 0 10-.82-1.26l-14 9a.75.75 0 00-.34.63v7C2 20.55 3.46 22 5.25 22h13.5c1.8 0 3.25-1.46 3.25-3.25v-7a.75.75 0 00-.75-.75H21V7.75C21 6.78 20.22 6 19.25 6h-3c-.97 0-1.75.78-1.75 1.75v.75h-3.25c-.97 0-1.75.78-1.75 1.75V11H5.3l11.86-7.62zM14.5 10v1H11v-.75c0-.14.11-.25.25-.25h3.25zm5 1H16V7.75c0-.14.11-.25.25-.25h3c.14 0 .25.11.25.25V11z" fill={primaryFill} /></svg>;
}

const BinFull24Filled = wrapIcon(rawSvg({}), 'BinFull24Filled');
export default BinFull24Filled;
      