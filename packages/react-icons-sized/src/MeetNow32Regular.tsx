import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.49 3.64A1 1 0 008.5 5.36l.07-.04.3-.14c.28-.12.72-.3 1.33-.47C11.43 4.36 13.34 4 16 4s4.57.36 5.79.71a10.55 10.55 0 011.7.65 1 1 0 001.02-1.72l-.02-.01a3.6 3.6 0 00-.56-.28c-.36-.16-.9-.36-1.6-.56C20.94 2.39 18.85 2 16 2s-4.93.39-6.34.79a12.53 12.53 0 00-2.15.84h-.02v.01zM7.5 7.5A3.5 3.5 0 004 11v10a3.5 3.5 0 003.5 3.5h10A3.5 3.5 0 0021 21v-2.03l4.74 2.8c1 .6 2.26-.13 2.26-1.29v-8.97a1.5 1.5 0 00-2.16-1.34L21 12.55V11a3.5 3.5 0 00-3.5-3.5h-10zM21 14.78l5-2.46v7.29l-5-2.96v-1.87zM6 11c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-10A1.5 1.5 0 016 21V11zm1.14 15.99a1 1 0 00.35 1.37h.02a2.4 2.4 0 00.15.1l.41.19c.37.16.9.36 1.6.56 1.4.4 3.49.79 6.33.79s4.93-.39 6.34-.79a12.54 12.54 0 002.12-.82l.03-.02h.02v-.01a1 1 0 00-1.02-1.72l-.07.04-.3.14c-.28.12-.72.3-1.33.47-1.22.35-3.13.71-5.79.71s-4.57-.36-5.79-.71a10.54 10.54 0 01-1.7-.65 1 1 0 00-1.37.35z" fill={primaryFill} /></svg>;
}

const MeetNow32Regular = wrapIcon(rawSvg({}), 'MeetNow32Regular');
export default MeetNow32Regular;
      