import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4.5V1H6.5C5.67 1 5 1.67 5 2.5v9c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V6h-3.5A1.5 1.5 0 019 4.5z" fill={primaryFill} /><path d="M10 4.5V1.25L13.75 5H10.5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3 4a1 1 0 011-1v8.5A2.5 2.5 0 006.5 14H12a1 1 0 01-1 1H6.56A3.56 3.56 0 013 11.44V4z" fill={primaryFill} /></svg>;
}

const DocumentCopy16Filled = wrapIcon(rawSvg({}), 'DocumentCopy16Filled');
export default DocumentCopy16Filled;
      