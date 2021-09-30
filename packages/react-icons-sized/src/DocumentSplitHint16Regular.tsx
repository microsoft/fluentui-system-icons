import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2a1 1 0 00-1 1v4.5a.5.5 0 01-1 0V3c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l2.91 2.91c.28.28.44.67.44 1.06V7.5a.5.5 0 01-1 0V6H9.5A1.5 1.5 0 018 4.5V2H5zm4 .2v2.3c0 .28.22.5.5.5h2.3L9 2.2zM3.5 9c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm9 0c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm-9 3c.28 0 .5.22.5.5v.5a1 1 0 001 1h.5a.5.5 0 010 1H5a2 2 0 01-2-2v-.5c0-.28.22-.5.5-.5zm9 0c.28 0 .5.22.5.5v.5a2 2 0 01-2 2h-.5a.5.5 0 010-1h.5a1 1 0 001-1v-.5c0-.28.22-.5.5-.5zM7 14.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentSplitHint16Regular = wrapIcon(rawSvg({}), 'DocumentSplitHint16Regular');
export default DocumentSplitHint16Regular;
      