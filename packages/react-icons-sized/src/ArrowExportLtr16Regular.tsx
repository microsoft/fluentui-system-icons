import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.5 3c.28 0 .5.22.5.5V12a.5.5 0 11-1 0V3.5c0-.28.22-.5.5-.5zm9.15.65c.2-.2.5-.2.7 0l3.5 3.5c.2.2.2.5 0 .7l-3.5 3.5a.5.5 0 01-.7-.7L13.29 8H4.5a.5.5 0 010-1h8.8l-2.65-2.65a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const ArrowExportLtr16Regular = wrapIcon(rawSvg({}), 'ArrowExportLtr16Regular');
export default ArrowExportLtr16Regular;
      