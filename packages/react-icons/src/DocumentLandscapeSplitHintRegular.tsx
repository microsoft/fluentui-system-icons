import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 011-1h.5a.5.5 0 000-1H4a2 2 0 00-2 2v.5a.5.5 0 001 0V6z" fill={primaryFill} /><path d="M9.5 4a.5.5 0 00-.5.5v11c0 .28.22.5.5.5H16a2 2 0 002-2V9.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0012.59 4H9.5zm.5 11V5h2v3.5c0 .83.67 1.5 1.5 1.5H17v4a1 1 0 01-1 1h-6zm3.5-6a.5.5 0 01-.5-.5V5.2L16.8 9h-3.3z" fill={primaryFill} /><path d="M3 14a1 1 0 001 1h.5a.5.5 0 010 1H4a2 2 0 01-2-2v-.5a.5.5 0 011 0v.5z" fill={primaryFill} /><path d="M3 8.5a.5.5 0 00-1 0v3a.5.5 0 001 0v-3z" fill={primaryFill} /><path d="M6 4.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M6.5 15a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /></svg>;
}

const DocumentLandscapeSplitHintRegular = wrapIcon(rawSvg({}), 'DocumentLandscapeSplitHintRegular');
export default DocumentLandscapeSplitHintRegular;
      