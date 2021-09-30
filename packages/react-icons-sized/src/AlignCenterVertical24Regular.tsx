import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 21.25V20h-2.5c-1.24 0-2.25-1-2.25-2.25v-2.5c0-1.24 1-2.25 2.25-2.25h2.5v-2h-4.5C5.51 11 4.5 10 4.5 8.75v-2.5C4.5 5.01 5.5 4 6.75 4h4.5V2.75a.75.75 0 011.5 0V4h4.5c1.24 0 2.25 1 2.25 2.25v2.5c0 1.24-1 2.25-2.25 2.25h-4.5v2h2.5c1.24 0 2.25 1 2.25 2.25v2.5c0 1.24-1 2.25-2.25 2.25h-2.5v1.25a.75.75 0 01-1.5 0zm4-2.75c.41 0 .75-.34.75-.75v-2.5a.75.75 0 00-.75-.75h-6.5a.75.75 0 00-.75.75v2.5c0 .41.34.75.75.75h6.5zm2-9c.41 0 .75-.34.75-.75v-2.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v2.5c0 .41.34.75.75.75h10.5z" fill={primaryFill} /></svg>;
}

const AlignCenterVertical24Regular = wrapIcon(rawSvg({}), 'AlignCenterVertical24Regular');
export default AlignCenterVertical24Regular;
      