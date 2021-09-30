import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 12a8.5 8.5 0 0117 0v2h-2.25a.75.75 0 00-.75.75v6.5c0 .41.34.75.75.75H19a3 3 0 003-3v-7a10 10 0 00-20 0v7a3 3 0 003 3h.75c.41 0 .75-.34.75-.75v-6.5a.75.75 0 00-.75-.75H3.5v-2zm17 3.5V19c0 .83-.67 1.5-1.5 1.5v-5h1.5zM3.5 19v-3.5H5v5A1.5 1.5 0 013.5 19zm9.25-7.25a.75.75 0 00-1.5 0v10.5a.75.75 0 001.5 0v-10.5zm-4 2.25c.41 0 .75.34.75.75v4.5a.75.75 0 01-1.5 0v-4.5c0-.41.34-.75.75-.75zm7.25.75a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z" fill={primaryFill} /></svg>;
}

const HeadphonesSoundWave24Regular = wrapIcon(rawSvg({}), 'HeadphonesSoundWave24Regular');
export default HeadphonesSoundWave24Regular;
      