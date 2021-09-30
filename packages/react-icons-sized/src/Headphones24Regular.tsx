import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12v7a3 3 0 01-2.82 3H16a1 1 0 01-1-.88V15a1 1 0 01.88-1h4.62v-2a8.5 8.5 0 00-17 0v2H8a1 1 0 011 1v6a1 1 0 01-1 1H5a3 3 0 01-3-3v-7a10 10 0 1120 0v7-7zM7.5 15.5h-4V19c0 .83.67 1.5 1.5 1.5h2.5v-5zm13 0h-4v5H19c.78 0 1.42-.6 1.5-1.36V15.5z" fill={primaryFill} /></svg>;
}

const Headphones24Regular = wrapIcon(rawSvg({}), 'Headphones24Regular');
export default Headphones24Regular;
      