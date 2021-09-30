import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 7H6v2h3V7z" fill={primaryFill} /><path d="M3 6a3 3 0 013-3h6v14H6a3 3 0 01-3-3V6zm2 1v2a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H6a1 1 0 00-1 1zm.5 4a.5.5 0 000 1h4a.5.5 0 000-1h-4zM5 13.5c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5z" fill={primaryFill} /><path d="M13 17h1a3 3 0 003-3v-1h-4v4z" fill={primaryFill} /><path d="M17 12V8h-4v4h4z" fill={primaryFill} /><path d="M17 7V6a3 3 0 00-3-3h-1v4h4z" fill={primaryFill} /></svg>;
}

const ContentViewGallery20Filled = wrapIcon(rawSvg({}), 'ContentViewGallery20Filled');
export default ContentViewGallery20Filled;
      