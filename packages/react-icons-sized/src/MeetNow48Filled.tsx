import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.88 8.83l.03-.02a6.04 6.04 0 01.64-.32 23.56 23.56 0 0119.54.32l.03.02a1.25 1.25 0 001.26-2.16l-.02-.01a5.7 5.7 0 00-.22-.12l-.62-.31c-.54-.26-1.32-.59-2.31-.92a26.06 26.06 0 00-19.35 1.23 8.6 8.6 0 00-.22.12h-.01l-.01.01s.18-.1 0 0a1.25 1.25 0 001.26 2.16zM8 17.06a4.56 4.56 0 014.56-4.56h12.88A4.56 4.56 0 0130 17.06v13.88a4.56 4.56 0 01-4.56 4.56H12.56A4.56 4.56 0 018 30.94V17.06zm24 10.5l6.14 5.04c1.14.93 2.86.12 2.86-1.36V16.76a1.75 1.75 0 00-2.86-1.36L32 20.45v7.1zM13.88 39.16a1.25 1.25 0 00-1.26 2.16c.29.16 0 0 0 0l.02.01.05.03a8.5 8.5 0 00.8.4c.53.26 1.31.59 2.3.92a26.06 26.06 0 0019.35-1.23l.17-.1.05-.02h.02v-.01a1.25 1.25 0 00-1.26-2.16l-.03.02a5.8 5.8 0 01-.64.32 23.56 23.56 0 01-19.54-.32l-.03-.02z" fill={primaryFill} /></svg>;
}

const MeetNow48Filled = wrapIcon(rawSvg({}), 'MeetNow48Filled');
export default MeetNow48Filled;
      