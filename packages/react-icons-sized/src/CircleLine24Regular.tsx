import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.53 11.25h16.94a8.5 8.5 0 00-16.94 0zm16.94 1.5H3.53a8.5 8.5 0 0016.94 0zM2 12a10 10 0 1120 0 10 10 0 01-20 0z" fill={primaryFill} /></svg>;
}

const CircleLine24Regular = wrapIcon(rawSvg({}), 'CircleLine24Regular');
export default CircleLine24Regular;
      