import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 29a1 1 0 01-1-1V6.41l-8.3 8.3a1 1 0 01-1.4-1.42l10-10a1 1 0 011.4 0l10 10a1 1 0 01-1.4 1.42L17 6.4V28a1 1 0 01-1 1z" fill={primaryFill} /></svg>;
}

const ArrowUp32Regular = wrapIcon(rawSvg({}), 'ArrowUp32Regular');
export default ArrowUp32Regular;
      