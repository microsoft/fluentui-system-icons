import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.85 10.85l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 10-.7.7L9.79 7.5H5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7zM15 8A7 7 0 111 8a7 7 0 0114 0zm-7 6A6 6 0 108 2a6 6 0 000 12z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight16Regular = wrapIcon(rawSvg({}), 'ArrowCircleRight16Regular');
export default ArrowCircleRight16Regular;
      