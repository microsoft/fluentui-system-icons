import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 16a1 1 0 00-1 1v5a1 1 0 102 0v-1h.5a2.5 2.5 0 000-5H9zm1.5 3H10v-1h.5a.5.5 0 010 1zm3.5-2a1 1 0 011-1h.5a3.5 3.5 0 110 7H15a1 1 0 01-1-1v-5zm2 3.91a1.5 1.5 0 000-2.82v2.82zM20 22v-5a1 1 0 011-1h3a1 1 0 110 2h-2v1h2a1 1 0 110 2h-2v1a1 1 0 11-2 0zM17 9V2H8a3 3 0 00-3 3v8a2 2 0 00-2 2v9c0 1.1.9 2 2 2v1a3 3 0 003 3h16a3 3 0 003-3v-1a2 2 0 002-2v-9a2 2 0 00-2-2v-1h-7a3 3 0 01-3-3zm10 6v9H5v-9h22zm-8-6V2.12a3 3 0 011.3.76l5.82 5.83a3 3 0 01.76 1.29H20a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const DocumentPdf32Filled = wrapIcon(rawSvg({}), 'DocumentPdf32Filled');
export default DocumentPdf32Filled;
      