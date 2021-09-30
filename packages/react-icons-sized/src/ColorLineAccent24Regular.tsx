import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 15.63a2 2 0 002.57 1.79l4.3-1.3c.42-.12.82-.33 1.16-.62h7.47a1 1 0 011 1v3a1 1 0 01-1 1h-15a1 1 0 01-1-1v-3c0-.37.2-.7.5-.87z" fill={primaryFill} /></svg>;
}

const ColorLineAccent24Regular = wrapIcon(rawSvg({}), 'ColorLineAccent24Regular');
export default ColorLineAccent24Regular;
      