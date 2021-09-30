import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3a1 1 0 011 1v21.59l8.3-8.3a1 1 0 011.4 1.42l-10 10a1 1 0 01-1.4 0l-10-10a1 1 0 111.4-1.42l8.3 8.3V4a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const ArrowDown32Regular = wrapIcon(rawSvg({}), 'ArrowDown32Regular');
export default ArrowDown32Regular;
      