import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2v8c0 1.1.9 2 2 2h8v12a2 2 0 01-2 2h-9.4A7.5 7.5 0 004 13.87V4c0-1.1.9-2 2-2h8z" fill={primaryFill} /><path d="M15.5 2.5V10c0 .28.22.5.5.5h7.5l-8-8z" fill={primaryFill} /><path d="M14 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-6-4a.5.5 0 00-1 0V20H3.5a.5.5 0 000 1H7v3.5a.5.5 0 001 0V21h3.5a.5.5 0 000-1H8v-3.5z" fill={primaryFill} /></svg>;
}

const DocumentAdd28Filled = wrapIcon(rawSvg({}), 'DocumentAdd28Filled');
export default DocumentAdd28Filled;
      