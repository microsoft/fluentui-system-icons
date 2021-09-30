import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 4.5A2.5 2.5 0 013.5 2h8A2.5 2.5 0 0114 4.5V8h-1V4.5c0-.83-.67-1.5-1.5-1.5h-8C2.67 3 2 3.67 2 4.5v5c0 .83.67 1.5 1.5 1.5H7v1H3.5A2.5 2.5 0 011 9.5v-5zM9 9a1 1 0 00-1 1v3a1 1 0 001 1h5a1 1 0 001-1v-3a1 1 0 00-1-1H9z" fill={primaryFill} /></svg>;
}

const PictureInPicture16Regular = wrapIcon(rawSvg({}), 'PictureInPicture16Regular');
export default PictureInPicture16Regular;
      