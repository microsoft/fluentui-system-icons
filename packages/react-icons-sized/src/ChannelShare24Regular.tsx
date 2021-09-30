import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h6c1.8 0 3.25 1.46 3.25 3.25a.75.75 0 01-1.5 0c0-.97-.78-1.75-1.75-1.75h-6c-.97 0-1.75.78-1.75 1.75v6c0 .97.78 1.75 1.75 1.75h5.85a2.75 2.75 0 110 1.5H6.25A3.25 3.25 0 013 12.25v-6zm10.5 8.5a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zM17.75 10c.97 0 1.75.78 1.75 1.75v6c0 .97-.78 1.75-1.75 1.75h-6c-.97 0-1.75-.78-1.75-1.75a.75.75 0 00-1.5 0c0 1.8 1.46 3.25 3.25 3.25h6c1.8 0 3.25-1.46 3.25-3.25v-6c0-1.8-1.46-3.25-3.25-3.25H11.9a2.75 2.75 0 100 1.5h5.85zm-8.5-2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const ChannelShare24Regular = wrapIcon(rawSvg({}), 'ChannelShare24Regular');
export default ChannelShare24Regular;
      