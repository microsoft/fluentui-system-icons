import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.01 28.98A17 17 0 1011 31.96l.02.02.02.02H11l10.09 10.7a4 4 0 005.82 0L37 32h-.04l.02-.02a16.76 16.76 0 002.03-3zm-15-1.48a6 6 0 110-12 6 6 0 010 12z" fill={primaryFill} /></svg>;
}

const Location48Filled = wrapIcon(rawSvg({}), 'Location48Filled');
export default Location48Filled;
      