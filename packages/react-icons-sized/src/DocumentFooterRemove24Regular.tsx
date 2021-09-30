import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 15.75c0-.97.78-1.75 1.75-1.75h6.5c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-6.5C7.78 19 7 18.22 7 17.25v-1.5zm1.75-.25a.25.25 0 00-.25.25v1.5c0 .14.11.25.25.25h6.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 00-.25-.25h-6.5z" fill={primaryFill} /><path d="M17.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-2.48 3.02a.5.5 0 000 .71L16.8 6.5l-1.76 1.77a.5.5 0 10.7.7l1.77-1.76 1.77 1.77a.5.5 0 10.7-.71L18.22 6.5l1.77-1.77a.5.5 0 00-.7-.7L17.5 5.78l-1.77-1.77a.5.5 0 00-.7 0z" fill={primaryFill} /><path d="M18.5 12.92a6.46 6.46 0 001.5-.42v7.24c0 1.2-.93 2.17-2.1 2.25H6.25c-1.2 0-2.17-.92-2.25-2.1V4.25C4 3.06 4.92 2.09 6.1 2h6.71c-.42.44-.79.94-1.08 1.5H6.25c-.38 0-.7.28-.75.64v15.6c0 .38.28.7.64.75h11.6c.38 0 .7-.28.75-.64v-6.93z" fill={primaryFill} /></svg>;
}

const DocumentFooterRemove24Regular = wrapIcon(rawSvg({}), 'DocumentFooterRemove24Regular');
export default DocumentFooterRemove24Regular;
      