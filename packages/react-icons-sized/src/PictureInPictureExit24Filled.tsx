import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 11a2 2 0 002-2V4a2 2 0 00-2-2H3a2 2 0 00-2 2v5a2 2 0 002 2h7zm0 1H3a3 3 0 01-1-.17v5.92C2 19.55 3.46 21 5.25 21h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 6.45 20.54 5 18.75 5H13v4a3 3 0 01-3 3zm4.25 4h1.69l-2.72-2.72a.75.75 0 111.06-1.06L17 14.94v-1.69a.75.75 0 011.5 0v3.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const PictureInPictureExit24Filled = wrapIcon(rawSvg({}), 'PictureInPictureExit24Filled');
export default PictureInPictureExit24Filled;
      