import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 2.22c.3-.3.77-.3 1.06 0l18.5 18.5a.75.75 0 01-1.06 1.06L18.94 20H4.25C3.01 20 2 19 2 17.75V6.25c0-.86.49-1.61 1.2-1.99l-.98-.98a.75.75 0 010-1.06zM11.94 13A3 3 0 019 10.06L4.44 5.5h-.19a.75.75 0 00-.75.75v11.5c0 .42.34.75.75.75H7v-2.75c0-.92.7-1.67 1.6-1.74l.15-.01h4.19l-1-1z" fill={primaryFill} /><path d="M14.63 11.45l-4.08-4.08a3 3 0 014.08 4.08z" fill={primaryFill} /><path d="M20.5 17.31V6.25a.75.75 0 00-.75-.75H8.68L7.18 4h12.57C20.99 4 22 5 22 6.25v11.5c0 .32-.07.61-.18.89L20.5 17.3z" fill={primaryFill} /></svg>;
}

const VideoPersonOff24Filled = wrapIcon(rawSvg({}), 'VideoPersonOff24Filled');
export default VideoPersonOff24Filled;
      