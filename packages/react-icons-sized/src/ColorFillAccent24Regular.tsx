import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.05 15a3.5 3.5 0 003.45 3 3.5 3.5 0 003.44-2.94A1.5 1.5 0 0121 16.5v3c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 013 19.5v-3c0-.83.67-1.5 1.5-1.5h3.09a3 3 0 004.05 0h1.41z" fill={primaryFill} /></svg>;
}

const ColorFillAccent24Regular = wrapIcon(rawSvg({}), 'ColorFillAccent24Regular');
export default ColorFillAccent24Regular;
      