import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2A2.5 2.5 0 001 4.5v5A2.5 2.5 0 003.5 12H7v-2c0-1.1.9-2 2-2h5V4.5A2.5 2.5 0 0011.5 2h-8zm.15 2.65c.2-.2.5-.2.7 0L6 6.29V5.5a.5.5 0 011 0v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.8L3.64 5.35a.5.5 0 010-.7zM8 10a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1H9a1 1 0 01-1-1v-3z" fill={primaryFill} /></svg>;
}

const PictureInPictureEnter16Filled = wrapIcon(rawSvg({}), 'PictureInPictureEnter16Filled');
export default PictureInPictureEnter16Filled;
      