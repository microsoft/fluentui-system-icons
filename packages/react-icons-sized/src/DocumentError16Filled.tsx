import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1h3v3.5c0 .83.67 1.5 1.5 1.5H14v7a2 2 0 01-2 2H8.67A5.5 5.5 0 004 5.2V3c0-1.1.9-2 2-2z" fill={primaryFill} /><path d="M10.5 5H14l-4-4v3.5c0 .28.22.5.5.5z" fill={primaryFill} /><path d="M10 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM5.5 8a.5.5 0 00-.5.5v2a.5.5 0 101 0v-2a.5.5 0 00-.5-.5zm0 5.12a.62.62 0 100-1.25.62.62 0 000 1.25z" fill={primaryFill} /></svg>;
}

const DocumentError16Filled = wrapIcon(rawSvg({}), 'DocumentError16Filled');
export default DocumentError16Filled;
      