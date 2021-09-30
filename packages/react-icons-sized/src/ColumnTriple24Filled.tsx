import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.24 3c.96 0 1.75.78 1.75 1.75v14.5c0 .97-.79 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75V4.75c0-.92.7-1.67 1.6-1.74h2.65zm14.02 0c.97 0 1.75.78 1.75 1.75v14.5c0 .97-.78 1.75-1.75 1.75h-2.5c-.96 0-1.75-.78-1.75-1.75V4.75c0-.97.79-1.75 1.75-1.75h2.5zm-7.02 0c.96 0 1.75.78 1.75 1.75v14.5c0 .97-.79 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75V4.75c0-.97.78-1.75 1.75-1.75h2.5z" fill={primaryFill} /></svg>;
}

const ColumnTriple24Filled = wrapIcon(rawSvg({}), 'ColumnTriple24Filled');
export default ColumnTriple24Filled;
      