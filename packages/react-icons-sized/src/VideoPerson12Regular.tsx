import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-1a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /><path d="M1 3.5C1 2.67 1.67 2 2.5 2h7c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 011 8.5v-5zM2.5 3a.5.5 0 00-.5.5v5c0 .28.22.5.5.5H4v-.5a1 1 0 011-1h2a1 1 0 011 1V9h1.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-7zM7 9v-.5H5V9h2z" fill={primaryFill} /></svg>;
}

const VideoPerson12Regular = wrapIcon(rawSvg({}), 'VideoPerson12Regular');
export default VideoPerson12Regular;
      