import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.22 4.46A3.5 3.5 0 007 7.51V24.5a3.5 3.5 0 005.23 3.04l15-8.5a3.5 3.5 0 000-6.08l-15-8.5z" fill={primaryFill} /></svg>;
}

const Play32Filled = wrapIcon(rawSvg({}), 'Play32Filled');
export default Play32Filled;
      