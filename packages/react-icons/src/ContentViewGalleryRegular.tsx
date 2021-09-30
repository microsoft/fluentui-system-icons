import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6a1 1 0 00-1 1v2a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H6zm0 1h3v2H6V7z" fill={primaryFill} /><path d="M5 11.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M5.5 13a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm8 10V4H6a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5zm3 0a2 2 0 002-2v-1h-4v3h2zm2-9V6a2 2 0 00-2-2h-2v3h4zm0 5V8h-4v4h4z" fill={primaryFill} /></svg>;
}

const ContentViewGalleryRegular = wrapIcon(rawSvg({}), 'ContentViewGalleryRegular');
export default ContentViewGalleryRegular;
      