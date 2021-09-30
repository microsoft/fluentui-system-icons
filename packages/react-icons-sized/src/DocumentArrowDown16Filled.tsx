import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 1H6a2 2 0 00-2 2v2.2A5.5 5.5 0 018.67 15H12a2 2 0 002-2V6h-3.5A1.5 1.5 0 019 4.5V1zm5 4h-3.5a.5.5 0 01-.5-.5V1l4 4zm-4 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.85 2.35a.5.5 0 00.35.15.5.5 0 00.35-.15l2-2a.5.5 0 00-.7-.7L6 11.29V8.5a.5.5 0 00-1 0v2.8l-1.15-1.15a.5.5 0 00-.7.7l2 2z" fill={primaryFill} /></svg>;
}

const DocumentArrowDown16Filled = wrapIcon(rawSvg({}), 'DocumentArrowDown16Filled');
export default DocumentArrowDown16Filled;
      