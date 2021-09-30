import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-7.98-1.77a.5.5 0 01.71-.7l1.77 1.76 1.77-1.77a.5.5 0 01.71 0 .5.5 0 010 .71L18.2 6.5l1.77 1.77c.19.19.2.5.02.69l-.02.02a.5.5 0 01-.71 0L17.5 7.2l-1.77 1.76a.5.5 0 11-.7-.7l1.76-1.77-1.77-1.77z" fill={primaryFill} /><path d="M8.5 15.75c0-.14.11-.25.25-.25h6.5c.14 0 .25.11.25.25v1.5c0 .14-.11.25-.25.25h-6.5a.25.25 0 01-.25-.25v-1.5z" fill={primaryFill} /><path d="M17.5 13c.88 0 1.73-.18 2.5-.5v7.24c0 1.2-.93 2.17-2.1 2.25H6.25c-1.2 0-2.17-.92-2.25-2.1V4.25C4 3.06 4.92 2.09 6.1 2h6.71a6.5 6.5 0 004.69 11zm-8.75 1C7.78 14 7 14.78 7 15.75v1.5c0 .97.78 1.75 1.75 1.75h6.5c.97 0 1.75-.78 1.75-1.75v-1.5c0-.97-.78-1.75-1.75-1.75h-6.5z" fill={primaryFill} /></svg>;
}

const DocumentFooterRemove24Filled = wrapIcon(rawSvg({}), 'DocumentFooterRemove24Filled');
export default DocumentFooterRemove24Filled;
      