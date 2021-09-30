import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.75 3c.41 0 .75.34.75.75v8.5a.75.75 0 01-1.5 0v-8.5c0-.41.34-.75.75-.75zm8.47.72c.3-.3.77-.3 1.06 0l3.5 3.5c.3.3.3.77 0 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H4.75a.75.75 0 010-1.5h7.69l-2.22-2.22a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const ArrowExportLtr16Filled = wrapIcon(rawSvg({}), 'ArrowExportLtr16Filled');
export default ArrowExportLtr16Filled;
      