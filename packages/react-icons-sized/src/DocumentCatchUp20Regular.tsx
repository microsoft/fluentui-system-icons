import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v4.5a.5.5 0 001 0V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-3H4v3c0 1.1.9 2 2 2h8a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7z" fill={primaryFill} /><path d="M7.46 8.3a.5.5 0 00-.9-.02L5.18 11H3.5a.5.5 0 000 1h2a.5.5 0 00.45-.28l1-2.02 2.09 5a.5.5 0 00.9.02L11.32 12h1.19a.5.5 0 000-1H11a.5.5 0 00-.45.28l-1 2.02-2.09-5z" fill={primaryFill} /></svg>;
}

const DocumentCatchUp20Regular = wrapIcon(rawSvg({}), 'DocumentCatchUp20Regular');
export default DocumentCatchUp20Regular;
      