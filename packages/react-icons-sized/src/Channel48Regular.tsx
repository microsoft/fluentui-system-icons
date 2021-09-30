import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.19 10.72A6.25 6.25 0 0112.25 6h23.5C39.2 6 42 8.8 42 12.25v23.5C42 39.2 39.2 42 35.75 42h-23.5A6.25 6.25 0 016 35.75V18.21a3.99 3.99 0 002.5.16v17.38a3.75 3.75 0 003.75 3.75h23.5a3.75 3.75 0 003.75-3.75v-23.5a3.75 3.75 0 00-3.75-3.75h-23.5c-1.53 0-2.84.91-3.43 2.22a4 4 0 00-2.63 0z" fill={primaryFill} /><path d="M6 12.5a2.5 2.5 0 103 4 2.5 2.5 0 00-3-4z" fill={primaryFill} /><path d="M17.25 19a1.25 1.25 0 100 2.5h13.5a1.25 1.25 0 100-2.5h-13.5z" fill={primaryFill} /><path d="M16 27.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 110 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const Channel48Regular = wrapIcon(rawSvg({}), 'Channel48Regular');
export default Channel48Regular;
      