import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2A2.5 2.5 0 001 4.5v5A2.5 2.5 0 003.5 12H7v-2c0-1.1.9-2 2-2h5V4.5A2.5 2.5 0 0011.5 2h-8zM8 10a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1H9a1 1 0 01-1-1v-3z" fill={primaryFill} /></svg>;
}

const PictureInPicture16Filled = wrapIcon(rawSvg({}), 'PictureInPicture16Filled');
export default PictureInPicture16Filled;
      