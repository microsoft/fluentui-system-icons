import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 4a.5.5 0 00-.5.5v11a.5.5 0 001 0v-11a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M15 10a.5.5 0 00-.5-.5H3.7l3.15-3.15a.5.5 0 00-.7-.7l-4 4a.5.5 0 000 .7l4 4a.5.5 0 00.7-.7L3.71 10.5H14.5a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const ArrowExportRtl20Regular = wrapIcon(rawSvg({}), 'ArrowExportRtl20Regular');
export default ArrowExportRtl20Regular;
      