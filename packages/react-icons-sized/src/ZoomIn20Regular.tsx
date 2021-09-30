import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 8.5A.5.5 0 0011 8H9V6a.5.5 0 00-1 0v2H6a.5.5 0 000 1h2v2a.5.5 0 001 0V9h2a.5.5 0 00.5-.5z" fill={primaryFill} /><path d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill={primaryFill} /></svg>;
}

const ZoomIn20Regular = wrapIcon(rawSvg({}), 'ZoomIn20Regular');
export default ZoomIn20Regular;
      