import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.41 8h-.06l-2.23-1.78A1 1 0 0011.5 6H8a4 4 0 00-4 4v1h7.11l3.3-3zm2.98 0l-5.22 4.74a1 1 0 01-.67.26H4v9a4 4 0 004 4h16a4 4 0 004-4V12a4 4 0 00-4-4h-6.61z" fill={primaryFill} /></svg>;
}

const Folder32Filled = wrapIcon(rawSvg({}), 'Folder32Filled');
export default Folder32Filled;
      