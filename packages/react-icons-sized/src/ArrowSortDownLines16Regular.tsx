import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.85 10.85l-3 3a.5.5 0 01-.7 0l-3-3a.5.5 0 01.7-.7L5 12.29V2.5a.5.5 0 011 0v9.8l2.15-2.15a.5.5 0 01.7.7zM8.5 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0 2a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /></svg>;
}

const ArrowSortDownLines16Regular = wrapIcon(rawSvg({}), 'ArrowSortDownLines16Regular');
export default ArrowSortDownLines16Regular;
      