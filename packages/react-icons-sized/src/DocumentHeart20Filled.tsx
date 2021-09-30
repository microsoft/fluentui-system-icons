import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5V9c.7.03 1.4.25 2 .66a3.85 3.85 0 014.88 5.91L8.45 18h6.05c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zm1 0V2.25L15.75 7H11.5a.5.5 0 01-.5-.5zm-4.86 4.33a2.85 2.85 0 114.03 4.04l-3.82 3.81a.5.5 0 01-.7 0l-3.82-3.81a2.85 2.85 0 114.03-4.04l.14.14.14-.14zm4.03 4.04l-.36-.36.36.36z" fill={primaryFill} /></svg>;
}

const DocumentHeart20Filled = wrapIcon(rawSvg({}), 'DocumentHeart20Filled');
export default DocumentHeart20Filled;
      