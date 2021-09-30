import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 14A6 6 0 108 2a6 6 0 000 12zm2.86-8.85c.19.2.19.52 0 .72L7.97 8.85a.48.48 0 01-.7 0L6.15 7.68a.52.52 0 010-.72c.2-.2.5-.2.7 0l.78.81 2.54-2.62c.2-.2.5-.2.7 0zM6.5 10h3a.5.5 0 010 1h-3a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const CheckmarkUnderlineCircle16Filled = wrapIcon(rawSvg({}), 'CheckmarkUnderlineCircle16Filled');
export default CheckmarkUnderlineCircle16Filled;
      