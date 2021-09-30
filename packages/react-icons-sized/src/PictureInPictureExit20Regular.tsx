import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 9c.83 0 1.5-.67 1.5-1.5v-4C10 2.67 9.33 2 8.5 2h-6C1.67 2 1 2.67 1 3.5v4c0 .65.42 1.2 1 1.41l.02.01c.15.05.31.08.48.08h6zm6.75-3H11V5h4.25A2.75 2.75 0 0118 7.75v6.5A2.75 2.75 0 0115.25 17H4.75A2.75 2.75 0 012 14.25v-4.3c.16.03.33.05.5.05H3v4.25c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-6.5C17 6.78 16.22 6 15.25 6zM14 12.3l-2.65-2.65a.5.5 0 00-.7.7L13.29 13H11.5a.5.5 0 000 1h3a.5.5 0 00.5-.5v-3a.5.5 0 00-1 0v1.8z" fill={primaryFill} /></svg>;
}

const PictureInPictureExit20Regular = wrapIcon(rawSvg({}), 'PictureInPictureExit20Regular');
export default PictureInPictureExit20Regular;
      