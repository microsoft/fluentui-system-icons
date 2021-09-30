import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H12v-4.5A2.5 2.5 0 009.5 11H9v-1a1 1 0 00-1-1H4V3.5C4 2.67 4.67 2 5.5 2H10z" fill={primaryFill} /><path d="M11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25z" fill={primaryFill} /><path d="M4 10.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h1a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2v-3c0-1.1.9-2 2-2h1v-1.5zm3 .5H5v1h2v-1zm-4 2a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1v-3a1 1 0 00-1-1H3z" fill={primaryFill} /></svg>;
}

const DocumentBriefcase20Filled = wrapIcon(rawSvg({}), 'DocumentBriefcase20Filled');
export default DocumentBriefcase20Filled;
      