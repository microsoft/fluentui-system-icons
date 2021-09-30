import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 4C20.55 4 22 5.46 22 7.25v11.5c0 1.8-1.46 3.25-3.25 3.25H7.25A3.25 3.25 0 014 18.75V12.5c.47.2.98.34 1.5.42v5.83c0 .2.04.4.1.6l5.83-5.7a2.25 2.25 0 013.02-.12l.12.11 5.83 5.7c.06-.18.1-.38.1-.59V7.25c0-.97-.78-1.75-1.75-1.75h-5.83A6.46 6.46 0 0012.5 4h6.25zm-6.2 10.64l-.07.07-5.81 5.7c.18.06.38.09.58.09h11.5c.2 0 .4-.03.58-.1l-5.8-5.69a.75.75 0 00-.97-.07zm3.7-7.14a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM6.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm9.75 8a.75.75 0 100 1.5.75.75 0 000-1.5zM6.5 3h-.09a.5.5 0 00-.4.4L6 3.5V6H3.4a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H6v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4L7 9.5V7h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4L9.5 6H7V3.4a.5.5 0 00-.41-.4H6.5z" fill={primaryFill} /></svg>;
}

const ImageAdd24Regular = wrapIcon(rawSvg({}), 'ImageAdd24Regular');
export default ImageAdd24Regular;
      