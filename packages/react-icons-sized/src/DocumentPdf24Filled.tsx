import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 13a.5.5 0 00-.5.5v3a.5.5 0 001 0V16h.5a1.5 1.5 0 000-3h-1zm1 2H8v-1h.5a.5.5 0 110 1z" fill={primaryFill} /><path d="M15 13.5c0-.27.22-.5.5-.5H17a.5.5 0 110 1h-1v1h1a.5.5 0 010 1h-1v.5a.5.5 0 01-1 0v-3z" fill={primaryFill} /><path d="M11.5 13h.5a2 2 0 010 4h-.5a.5.5 0 01-.5-.5v-3c0-.27.22-.5.5-.5zm.5 3a1 1 0 000-2v2z" fill={primaryFill} /><path d="M12 8V2H6a2 2 0 00-2 2v6.67c-.6.28-1 .88-1 1.58v5.5c0 .7.4 1.3 1 1.58V20c0 1.1.9 2 2 2h12a2 2 0 002-2v-.67c.6-.28 1-.88 1-1.58v-5.5c0-.7-.4-1.3-1-1.58V10h-6a2 2 0 01-2-2zm-7.25 4h14.5c.14 0 .25.11.25.25v5.5c0 .14-.11.25-.25.25H4.75a.25.25 0 01-.25-.25v-5.5c0-.14.11-.25.25-.25z" fill={primaryFill} /><path d="M13.5 8V2.5l6 6H14a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentPdf24Filled = wrapIcon(rawSvg({}), 'DocumentPdf24Filled');
export default DocumentPdf24Filled;
      