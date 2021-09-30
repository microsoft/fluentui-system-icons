import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8-3v.55a3.49 3.49 0 016 2.45 3.5 3.5 0 01-6.19 2.24c-.26-.31 0-.74.41-.74.18 0 .34.09.46.21A2.5 2.5 0 009 6.5 2.5 2.5 0 004.5 5h1a.5.5 0 010 1h-2a.5.5 0 01-.5-.5v-2a.5.5 0 011 0z" fill={primaryFill} /><path d="M18.75 5.5h-5.83A6.45 6.45 0 0012.5 4h6.25C20.55 4 22 5.46 22 7.25v11.5c0 1.8-1.46 3.25-3.25 3.25H7.25A3.25 3.25 0 014 18.75V12.5c.47.2.98.34 1.5.42v5.83c0 .2.04.4.1.6l5.83-5.7a2.25 2.25 0 013.02-.12l.12.11 5.83 5.7c.06-.18.1-.38.1-.59V7.25c0-.97-.78-1.75-1.75-1.75zm.58 14.9l-5.8-5.69a.75.75 0 00-.97-.07l-.08.07-5.81 5.7c.18.06.38.09.58.09h11.5c.2 0 .4-.03.58-.1z" fill={primaryFill} /><path d="M16.25 7.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm0 1.5a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const ImageArrowCounterclockwise24Regular = wrapIcon(rawSvg({}), 'ImageArrowCounterclockwise24Regular');
export default ImageArrowCounterclockwise24Regular;
      