import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 2A3.25 3.25 0 002 5.25v9c0 .64.19 1.24.5 1.74l5.7-5.37a2.25 2.25 0 013.1 0L17 16c.31-.5.5-1.1.5-1.74v-9c0-1.8-1.46-3.25-3.25-3.25h-9zm7.5 6a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-7.5 9.5c-.61 0-1.18-.17-1.67-.46l5.66-5.33a.75.75 0 011.02 0l5.66 5.33c-.49.3-1.06.46-1.67.46h-9zm1.25 1.25v-.25h8a4 4 0 004-4v-8h.25c1.8 0 3.25 1.46 3.25 3.25v7c0 2.9-2.35 5.25-5.25 5.25h-7a3.25 3.25 0 01-3.25-3.25z" fill={primaryFill} /></svg>;
}

const ImageShadow24Filled = wrapIcon(rawSvg({}), 'ImageShadow24Filled');
export default ImageShadow24Filled;
      