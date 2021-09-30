import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 4.5c.38 0 .7.28.74.65l.01.1v13.5a.75.75 0 01-1.5.1V5.25c0-.41.34-.75.75-.75zm-9.04 1.89l.08-.1a1 1 0 011.32-.08l.1.08 5 5a1 1 0 01.08 1.32l-.09.1-5 5a1 1 0 01-1.5-1.32l.1-.1L15.57 13H3a1 1 0 01-1-.88V12a1 1 0 01.88-1h12.7L12.3 7.7a1 1 0 01-.08-1.31l.08-.1-.08.1z" fill={primaryFill} /></svg>;
}

const ArrowImport24Filled = wrapIcon(rawSvg({}), 'ArrowImport24Filled');
export default ArrowImport24Filled;
      