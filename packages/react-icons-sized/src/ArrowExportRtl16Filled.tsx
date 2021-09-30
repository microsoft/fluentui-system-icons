import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.25 3a.75.75 0 00-.75.75v8.5a.75.75 0 001.5 0v-8.5a.75.75 0 00-.75-.75zm-8.47.72a.75.75 0 00-1.06 0l-3.5 3.5c-.3.3-.3.77 0 1.06l3.5 3.5a.75.75 0 101.06-1.06L3.56 8.5h7.69a.75.75 0 000-1.5H3.56l2.22-2.22c.3-.3.3-.77 0-1.06z" fill={primaryFill} /></svg>;
}

const ArrowExportRtl16Filled = wrapIcon(rawSvg({}), 'ArrowExportRtl16Filled');
export default ArrowExportRtl16Filled;
      