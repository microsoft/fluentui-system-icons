import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 6.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm6.65-2.15a.5.5 0 11.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 11-.7-.7L8.29 6H6.25C5.01 6 4 7 4 8.25v.25a.5.5 0 01-1 0v-.25C3 6.45 4.46 5 6.25 5h2.04l-.64-.65zm8.1 3.15a.75.75 0 110 1.5.75.75 0 010-1.5zM13 6.5a6.5 6.5 0 01-10 5.48v5.77c0 .63.18 1.21.49 1.7l6.93-6.8.14-.13c.83-.7 2.05-.7 2.89.01l.13.12 6.93 6.8c.31-.49.49-1.07.49-1.7V6.25C21 4.45 19.54 3 17.75 3h-5.77A6.47 6.47 0 0113 6.5zm2.75-.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm-4.28 7.72l.09-.07c.26-.2.61-.2.87-.01l.1.08 6.92 6.8c-.5.3-1.08.48-1.7.48H6.25c-.62 0-1.2-.18-1.7-.48l6.92-6.8z" fill={primaryFill} /></svg>;
}

const ImageArrowForward24Filled = wrapIcon(rawSvg({}), 'ImageArrowForward24Filled');
export default ImageArrowForward24Filled;
      