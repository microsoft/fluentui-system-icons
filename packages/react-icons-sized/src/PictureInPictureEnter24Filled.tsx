import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3A3.25 3.25 0 002 6.25v9.5C2 17.55 3.46 19 5.25 19H11v-4a3 3 0 013-3h7a3 3 0 011 .17V6.25C22 4.45 20.54 3 18.75 3H5.25zm1.03 3.22L9.5 9.44V7.75a.75.75 0 011.5 0v3.5c0 .41-.34.75-.75.75h-3.5a.75.75 0 010-1.5h1.69L5.22 7.28a.75.75 0 011.06-1.06zM22 13.27a2 2 0 00-1-.27h-7a2 2 0 00-2 2v5c0 1.1.9 2 2 2h7a2 2 0 002-2v-5a2 2 0 00-1-1.73z" fill={primaryFill} /></svg>;
}

const PictureInPictureEnter24Filled = wrapIcon(rawSvg({}), 'PictureInPictureEnter24Filled');
export default PictureInPictureEnter24Filled;
      