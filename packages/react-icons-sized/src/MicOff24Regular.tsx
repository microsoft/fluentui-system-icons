import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L8 9.06V12a4 4 0 006.25 3.3l1.14 1.15a5.23 5.23 0 01-3.14 1.05h-.72a5.25 5.25 0 01-5.03-5.25v-.6a.75.75 0 00-1.5.1v.74a6.75 6.75 0 006.25 6.5v2.36a.75.75 0 001.5-.1v-2.27c1.4-.1 2.68-.63 3.71-1.46l4.26 4.26a.75.75 0 001.06-1.06L3.28 2.22zm9.88 12A2.5 2.5 0 019.5 12v-1.44l3.66 3.66z" fill={primaryFill} /><path d="M14.5 6v5.32l1.43 1.43c.05-.24.07-.5.07-.75V6a4 4 0 00-7.86-1.04L9.5 6.32V6a2.5 2.5 0 015 0z" fill={primaryFill} /><path d="M17.2 14.01l1.14 1.15c.42-.88.66-1.87.66-2.91v-.6a.75.75 0 00-1.5.1v.72a5.23 5.23 0 01-.3 1.54z" fill={primaryFill} /></svg>;
}

const MicOff24Regular = wrapIcon(rawSvg({}), 'MicOff24Regular');
export default MicOff24Regular;
      