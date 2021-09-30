import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2v8c0 1.1.9 2 2 2h8v12a2 2 0 01-2 2h-9.4A7.5 7.5 0 004 13.87V4c0-1.1.9-2 2-2h8z" fill={primaryFill} /><path d="M15.5 2.5V10c0 .28.22.5.5.5h7.5l-8-8z" fill={primaryFill} /><path d="M14 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-2.5.5a.5.5 0 000-1H4.7l2.15-2.15a.5.5 0 00-.7-.7l-3 3a.5.5 0 00-.15.35c0 .13.05.26.15.35l3 3a.5.5 0 00.7-.7L4.71 21h6.79z" fill={primaryFill} /></svg>;
}

const DocumentArrowLeft28Filled = wrapIcon(rawSvg({}), 'DocumentArrowLeft28Filled');
export default DocumentArrowLeft28Filled;
      