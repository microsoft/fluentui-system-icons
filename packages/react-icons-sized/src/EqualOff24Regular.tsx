import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06L6.94 8H3.75a.75.75 0 000 1.5h4.69l5 5H3.75a.75.75 0 000 1.5h11.19l5.78 5.78a.75.75 0 001.06-1.06L3.28 2.22zM20.25 14.5h-2.57l1.5 1.5h1.07a.75.75 0 000-1.5zM11.18 8l1.5 1.5h7.57a.75.75 0 000-1.5h-9.07z" fill={primaryFill} /></svg>;
}

const EqualOff24Regular = wrapIcon(rawSvg({}), 'EqualOff24Regular');
export default EqualOff24Regular;
      