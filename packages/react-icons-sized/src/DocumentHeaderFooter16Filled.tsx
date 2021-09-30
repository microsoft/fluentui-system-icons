import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.75C3 1.78 3.78 1 4.75 1h6.5c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75h-6.5C3.78 15 3 14.22 3 13.25V2.75zM6 3a1 1 0 000 2h4a1 1 0 100-2H6zm0 8a1 1 0 100 2h4a1 1 0 100-2H6z" fill={primaryFill} /></svg>;
}

const DocumentHeaderFooter16Filled = wrapIcon(rawSvg({}), 'DocumentHeaderFooter16Filled');
export default DocumentHeaderFooter16Filled;
      