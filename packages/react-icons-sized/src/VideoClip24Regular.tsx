import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 4h11.5a3.25 3.25 0 013.24 3.07l.01.18v9.5a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 16.75v-9.5a3.25 3.25 0 013.07-3.24L6.25 4h11.5-11.5zm11.5 1.5H6.25c-.92 0-1.67.7-1.74 1.6l-.01.15v9.5c0 .92.7 1.67 1.6 1.74l.15.01h11.5c.92 0 1.67-.7 1.74-1.6l.01-.15v-9.5c0-.92-.7-1.67-1.6-1.74l-.15-.01zm-7.7 4.09a.5.5 0 01.59-.26l.08.03 4.39 2.2a.5.5 0 01.07.84l-.07.05-4.39 2.19a.5.5 0 01-.71-.36L10 14.2V9.81a.5.5 0 01.05-.22z" fill={primaryFill} /></svg>;
}

const VideoClip24Regular = wrapIcon(rawSvg({}), 'VideoClip24Regular');
export default VideoClip24Regular;
      