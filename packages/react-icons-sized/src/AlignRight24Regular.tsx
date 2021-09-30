import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 2.75a.75.75 0 00-1.5 0v18.5a.75.75 0 001.5 0V2.75zM15.75 4C16.99 4 18 5 18 6.25v2.5C18 9.99 17 11 15.75 11H5.25C4.01 11 3 10 3 8.75v-2.5C3 5.01 4 4 5.25 4h10.5zm.75 2.25a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v2.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75v-2.5zM15.75 13c1.24 0 2.25 1 2.25 2.25v2.5c0 1.24-1 2.25-2.25 2.25h-7c-1.24 0-2.25-1-2.25-2.25v-2.5c0-1.24 1-2.25 2.25-2.25h7zm.75 2.25a.75.75 0 00-.75-.75h-7a.75.75 0 00-.75.75v2.5c0 .41.34.75.75.75h7c.41 0 .75-.34.75-.75v-2.5z" fill={primaryFill} /></svg>;
}

const AlignRight24Regular = wrapIcon(rawSvg({}), 'AlignRight24Regular');
export default AlignRight24Regular;
      