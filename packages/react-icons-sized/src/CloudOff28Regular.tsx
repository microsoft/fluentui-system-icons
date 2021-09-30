import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L8.3 9.37c-.43.79-.7 1.68-.78 2.63h-.27a4.75 4.75 0 100 9.5h13.19l4.28 4.28a.75.75 0 001.06-1.06L3.28 2.22zM18.94 20H7.25a3.25 3.25 0 010-6.5h1c.41 0 .75-.34.75-.75v-.25c0-.72.15-1.4.42-2.02L18.94 20zM10.32 7.14l1.09 1.08A5 5 0 0119 12.5v.25c-.01.41.33.75.74.75h1a3.25 3.25 0 011.85 5.92l1.07 1.07A4.74 4.74 0 0020.75 12h-.27a6.5 6.5 0 00-10.16-4.86z" fill={primaryFill} /></svg>;
}

const CloudOff28Regular = wrapIcon(rawSvg({}), 'CloudOff28Regular');
export default CloudOff28Regular;
      