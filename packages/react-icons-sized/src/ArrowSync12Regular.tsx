import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.35 2.85a.5.5 0 000-.7L6.1.9a.5.5 0 00-.7.7l.4.4a4 4 0 00-2.9 6.53.5.5 0 00.78-.63A3 3 0 015.79 3l-.4.39a.5.5 0 10.71.7l1.25-1.25zm.84.38a.5.5 0 00-.01.7A3 3 0 016.22 9l.38-.39a.5.5 0 10-.7-.7L4.65 9.15a.5.5 0 000 .7L5.9 11.1a.5.5 0 00.7-.7l-.4-.4a4 4 0 002.7-6.75.5.5 0 00-.7-.02z" fill={primaryFill} /></svg>;
}

const ArrowSync12Regular = wrapIcon(rawSvg({}), 'ArrowSync12Regular');
export default ArrowSync12Regular;
      