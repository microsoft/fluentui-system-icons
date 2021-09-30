import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM5.35 4.35a.5.5 0 10-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 10.7-.7L4.71 6h2.04C7.99 6 9 7 9 8.25v.25a.5.5 0 001 0v-.25C10 6.45 8.54 5 6.75 5H4.71l.64-.65zm10.4 3.15a.75.75 0 110 1.5.75.75 0 010-1.5zM13 6.5a6.5 6.5 0 01-10 5.48v5.77c0 .63.18 1.21.49 1.7l6.93-6.8.14-.13c.83-.7 2.05-.7 2.89.01l.13.12 6.93 6.8c.31-.49.49-1.07.49-1.7V6.25C21 4.45 19.54 3 17.75 3h-5.77A6.47 6.47 0 0113 6.5zm2.75-.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm-4.28 7.72l.09-.07c.26-.2.61-.2.87-.01l.1.08 6.92 6.8c-.5.3-1.08.48-1.7.48H6.25c-.62 0-1.2-.18-1.7-.48l6.92-6.8z" fill={primaryFill} /></svg>;
}

const ImageArrowBack24Filled = wrapIcon(rawSvg({}), 'ImageArrowBack24Filled');
export default ImageArrowBack24Filled;
      