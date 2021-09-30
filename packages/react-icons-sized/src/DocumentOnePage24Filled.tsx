import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.16v15.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.1L4 19.76V4.25c0-1.18.93-2.16 2.1-2.24h11.65zm-10 5a.75.75 0 100 1.5h8.5a.75.75 0 000-1.5h-8.5zM7 11.75c0 .41.34.75.75.75h8.5a.75.75 0 000-1.5h-8.5a.75.75 0 00-.75.75zM7.75 15a.75.75 0 100 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill={primaryFill} /></svg>;
}

const DocumentOnePage24Filled = wrapIcon(rawSvg({}), 'DocumentOnePage24Filled');
export default DocumentOnePage24Filled;
      