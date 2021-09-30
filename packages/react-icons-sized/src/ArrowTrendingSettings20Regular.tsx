import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 01-1 0V4.7l-4.65 4.65a.5.5 0 01-.7 0L9 7.71l-5.15 5.14a.5.5 0 01-.7-.7l5.5-5.5a.5.5 0 01.7 0L11 8.29 15.3 4h-2.8a.5.5 0 010-1h4zm-4.43 8.44a2 2 0 01-1.44 2.48l-.46.12a4.74 4.74 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const ArrowTrendingSettings20Regular = wrapIcon(rawSvg({}), 'ArrowTrendingSettings20Regular');
export default ArrowTrendingSettings20Regular;
      