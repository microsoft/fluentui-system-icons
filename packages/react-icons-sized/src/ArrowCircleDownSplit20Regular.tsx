import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.8 12.41l-1.45 1.44a.5.5 0 01-.7 0L5.2 12.41a.5.5 0 01.7-.7l.59.58V8.5c0-.28.22-.5.5-.5h2.5V5.5a.5.5 0 011 0V8H13c.28 0 .5.22.5.5v3.8l.59-.6a.5.5 0 01.7.71l-1.44 1.44a.5.5 0 01-.7 0l-1.44-1.44a.5.5 0 01.7-.7l.59.58V9h-5v3.3l.59-.6a.5.5 0 11.7.71zM10 18a8 8 0 100-16 8 8 0 000 16zm7-8a7 7 0 11-14 0 7 7 0 0114 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleDownSplit20Regular = wrapIcon(rawSvg({}), 'ArrowCircleDownSplit20Regular');
export default ArrowCircleDownSplit20Regular;
      