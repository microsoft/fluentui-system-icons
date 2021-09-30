import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 4.5V1H4.5C3.67 1 3 1.67 3 2.5v5c0 .28.22.5.5.5h9a.5.5 0 00.5-.5V6H9.5A1.5 1.5 0 018 4.5zm1 0V1.25L12.75 5H9.5a.5.5 0 01-.5-.5zm-5 5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zm9 0a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zm-9 3a.5.5 0 00-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 000-1H5a1 1 0 01-1-1v-.5zm9 0a.5.5 0 00-1 0v.5a1 1 0 01-1 1h-.5a.5.5 0 000 1h.5a2 2 0 002-2v-.5zM7.5 14a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /></svg>;
}

const DocumentSplitHint16Filled = wrapIcon(rawSvg({}), 'DocumentSplitHint16Filled');
export default DocumentSplitHint16Filled;
      