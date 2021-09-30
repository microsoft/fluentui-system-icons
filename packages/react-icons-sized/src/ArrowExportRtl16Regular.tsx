import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3a.5.5 0 00-.5.5V12a.5.5 0 001 0V3.5a.5.5 0 00-.5-.5zm-9.15.65a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7l3.5 3.5a.5.5 0 10.7-.7L2.71 8h8.79a.5.5 0 000-1H2.7l2.65-2.65a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const ArrowExportRtl16Regular = wrapIcon(rawSvg({}), 'ArrowExportRtl16Regular');
export default ArrowExportRtl16Regular;
      