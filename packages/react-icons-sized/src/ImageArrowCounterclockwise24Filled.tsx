import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8-3v.55a3.49 3.49 0 016 2.45 3.5 3.5 0 01-6.19 2.24c-.26-.31 0-.74.41-.74.18 0 .34.09.46.21A2.5 2.5 0 009 6.5 2.5 2.5 0 004.5 5h1a.5.5 0 010 1h-2a.5.5 0 01-.5-.5v-2a.5.5 0 011 0z" fill={primaryFill} /><path d="M17.5 9.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" fill={primaryFill} /><path d="M13 6.5a6.5 6.5 0 01-9 6v6.25c0 .63.18 1.21.49 1.7l6.93-6.8.14-.13c.83-.7 2.05-.7 2.89.01l.13.12 6.93 6.8c.31-.49.49-1.07.49-1.7V7.25C22 5.45 20.54 4 18.75 4H12.5c.32.77.5 1.61.5 2.5zm1.5 2.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z" fill={primaryFill} /><path d="M12.47 14.72l.09-.07c.26-.2.61-.2.87-.01l.1.08 6.92 6.8c-.5.3-1.08.48-1.7.48H7.25c-.62 0-1.2-.18-1.7-.48l6.92-6.8z" fill={primaryFill} /></svg>;
}

const ImageArrowCounterclockwise24Filled = wrapIcon(rawSvg({}), 'ImageArrowCounterclockwise24Filled');
export default ImageArrowCounterclockwise24Filled;
      