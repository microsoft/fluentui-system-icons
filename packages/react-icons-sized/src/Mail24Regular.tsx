import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4h13.5a3.25 3.25 0 013.24 3.07l.01.18v9.5a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 16.75v-9.5a3.25 3.25 0 013.07-3.24L5.25 4h13.5-13.5zM20.5 9.37l-8.15 4.3c-.19.1-.4.1-.6.04l-.1-.05L3.5 9.37v7.38c0 .92.7 1.67 1.6 1.74l.15.01h13.5c.92 0 1.67-.7 1.74-1.6l.01-.15V9.37zM18.75 5.5H5.25c-.92 0-1.67.7-1.74 1.6l-.01.15v.43l8.5 4.47 8.5-4.47v-.43c0-.92-.7-1.67-1.6-1.74l-.15-.01z" fill={primaryFill} /></svg>;
}

const Mail24Regular = wrapIcon(rawSvg({}), 'Mail24Regular');
export default Mail24Regular;
      