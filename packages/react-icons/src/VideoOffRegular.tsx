import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L3.5 4.21A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h7a2.5 2.5 0 002.3-1.5l3.35 3.35a.5.5 0 00.7-.7l-15-15zM13 13.69A1.5 1.5 0 0111.5 15h-7A1.5 1.5 0 013 13.5v-7c0-.76.57-1.4 1.3-1.49L13 13.7z" fill={primaryFill} /><path d="M13 10.88l3.47 3.47A1 1 0 0018 13.5v-7a1 1 0 00-1.6-.8L14 7.5v-1A2.5 2.5 0 0011.5 4H6.12l1 1h4.38c.83 0 1.5.67 1.5 1.5v4.38zm1-2.13l3-2.25v7l-3-2.25v-2.5z" fill={primaryFill} /></svg>;
}

const VideoOffRegular = wrapIcon(rawSvg({}), 'VideoOffRegular');
export default VideoOffRegular;
      