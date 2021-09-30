import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 2A3.25 3.25 0 002 5.25v8a3.3 3.3 0 00.56 1.82 3.27 3.27 0 002.4 1.42l.29.01H7.5v2.25c0 1.8 1.46 3.25 3.25 3.25h8c1.8 0 3.25-1.46 3.25-3.25v-8c0-1.8-1.46-3.25-3.25-3.25H16.5V5.25a3.28 3.28 0 00-1.54-2.77 3.29 3.29 0 00-1.7-.48H5.24zm.69 1.5L3.5 5.94v-.69c0-.97.78-1.75 1.75-1.75h.69zM3.5 8.06L8.06 3.5h1.88L3.5 9.94V8.06zm8.56-4.56h1.19c.2 0 .4.04.59.1L9.8 7.64A3.26 3.26 0 007.64 9.8L3.6 13.84c-.06-.19-.1-.38-.1-.59v-1.19l8.56-8.56zm2.84 1.16c.06.19.1.38.1.59v1.19L13.94 7.5h-1.88l2.84-2.84zm-7.4 7.4v1.88L6.44 15H5.25c-.2 0-.4-.04-.59-.1l2.84-2.84zM9 10.75C9 9.78 9.78 9 10.75 9h8c.97 0 1.75.78 1.75 1.75v8c0 .97-.78 1.75-1.75 1.75h-8c-.97 0-1.75-.78-1.75-1.75v-8z" fill={primaryFill} /></svg>;
}

const ShapeSubtract24Regular = wrapIcon(rawSvg({}), 'ShapeSubtract24Regular');
export default ShapeSubtract24Regular;
      