import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 7a.5.5 0 000 1h2a.5.5 0 000-1H7z" fill={primaryFill} /><path d="M2 5a1 1 0 001 1v6c0 1.1.9 2 2 2h6a2 2 0 002-2V6a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v2zm11-2v2H3V3h10zM4 6h8v6a1 1 0 01-1 1H5a1 1 0 01-1-1V6z" fill={primaryFill} /></svg>;
}

const Archive16Regular = wrapIcon(rawSvg({}), 'Archive16Regular');
export default Archive16Regular;
      