import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0-1.5c-.83 0-1.6-.25-2.25-.7l5.56-5.55a4 4 0 01-3.3 6.25zM3.2 8.75a4 4 0 015.56-5.56L3.18 8.75zm13.3-.5a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM6.5 13a6.5 6.5 0 005.48-10h5.77C19.55 3 21 4.46 21 6.25v11.5c0 .63-.18 1.21-.49 1.7l-6.93-6.8-.13-.12c-.83-.7-2.06-.7-2.9 0l-.13.12-6.93 6.8c-.31-.49-.49-1.07-.49-1.7v-5.77A6.47 6.47 0 006.5 13zm7-4.75a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zm-1.94 5.4l-.09.07-6.92 6.8c.5.3 1.08.48 1.7.48h11.5c.62 0 1.2-.18 1.7-.48l-6.92-6.8-.1-.08a.75.75 0 00-.87 0z" fill={primaryFill} /></svg>;
}

const ImageProhibited24Filled = wrapIcon(rawSvg({}), 'ImageProhibited24Filled');
export default ImageProhibited24Filled;
      