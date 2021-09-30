import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 8.25a.75.75 0 011.5 0v3.25c0 .41-.34.75-.75.75H14a.75.75 0 010-1.5h1.27a3.5 3.5 0 00-5.94-1.02.75.75 0 11-1.16-.96A5 5 0 0116 9v-.75zM8 15v.75a.75.75 0 01-1.5 0v-3c0-.41.34-.75.75-.75H10a.75.75 0 010 1.5H8.84a3.5 3.5 0 005.84.77.75.75 0 111.14.97A5.01 5.01 0 018 15zm4-13a10 10 0 100 20 10 10 0 000-20zm8.5 10a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z" fill={primaryFill} /></svg>;
}

const ArrowSyncCircle24Regular = wrapIcon(rawSvg({}), 'ArrowSyncCircle24Regular');
export default ArrowSyncCircle24Regular;
      