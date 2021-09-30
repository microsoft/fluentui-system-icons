import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.15 7.15l2.5-2.5c.2-.2.5-.2.7 0l2.5 2.5a.5.5 0 01-.7.7L8.5 6.21V11a.5.5 0 01-1 0V6.2L5.85 7.86a.5.5 0 11-.7-.7z" fill={primaryFill} /><path d="M8 1a7 7 0 100 14A7 7 0 008 1zM2 8a6 6 0 1112 0A6 6 0 012 8z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp16Regular = wrapIcon(rawSvg({}), 'ArrowCircleUp16Regular');
export default ArrowCircleUp16Regular;
      