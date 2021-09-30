import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 20.5h13.5a.75.75 0 01.1 1.5H5.25a.75.75 0 01-.1-1.5h13.6-13.5zM11.88 2H12a1 1 0 011 .88V15.59l3.3-3.3a1 1 0 011.31-.08l.1.08a1 1 0 01.08 1.32l-.08.1-5 5a1 1 0 01-1.32.08l-.1-.09-5-5a1 1 0 011.32-1.5l.1.1L11 15.57V3a1 1 0 01.88-1H12h-.12z" fill={primaryFill} /></svg>;
}

const ArrowDownload24Filled = wrapIcon(rawSvg({}), 'ArrowDownload24Filled');
export default ArrowDownload24Filled;
      