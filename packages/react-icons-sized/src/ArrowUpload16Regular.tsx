import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2a.5.5 0 000 1h9a.5.5 0 000-1h-9zm4.85 2.15a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 10.7.7L7.5 5.71v7.79a.5.5 0 001 0V5.7l2.65 2.65a.5.5 0 00.7-.7l-3.5-3.5z" fill={primaryFill} /></svg>;
}

const ArrowUpload16Regular = wrapIcon(rawSvg({}), 'ArrowUpload16Regular');
export default ArrowUpload16Regular;
      