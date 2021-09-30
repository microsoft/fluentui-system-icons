import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.98 8.62a.5.5 0 01-.6.36c-.44-.11-.36-.6-.36-.6l.01-.07.05-.14A6.7 6.7 0 013.2 6.19C4.1 5.08 5.6 4 8 4s3.9 1.09 4.8 2.18a6.7 6.7 0 011.18 2.17v.02a.5.5 0 01-.96.26L13 8.6a2.9 2.9 0 00-.2-.52 5.7 5.7 0 00-.78-1.26A4.96 4.96 0 008 5c-2.04 0-3.29.91-4.03 1.82A5.7 5.7 0 003 8.6v.02z" fill={primaryFill} /><path d="M8 7a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM6.5 9.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={primaryFill} /></svg>;
}

const EyeShow16Regular = wrapIcon(rawSvg({}), 'EyeShow16Regular');
export default EyeShow16Regular;
      