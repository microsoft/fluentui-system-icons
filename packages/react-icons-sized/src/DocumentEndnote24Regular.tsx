import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.25c0-.41.34-.75.75-.75H12V8c0 1.1.9 2 2 2h4.5v9.75c0 .41-.34.75-.75.75H13V22h4.75c1.24 0 2.25-1 2.25-2.25V9.66c0-.46-.18-.9-.51-1.23L13.57 2.5A1.75 1.75 0 0012.34 2H6.25C5.01 2 4 3 4 4.25V12h1.5V4.25zm8 3.75V4.56l3.94 3.94H14a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M4.5 13.75c0 .41-.34.75-.75.75H2.5v7h1.25a.75.75 0 010 1.5H2.5A1.5 1.5 0 011 21.5v-7c0-.83.67-1.5 1.5-1.5h1.25c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M9.25 14.5a.75.75 0 010-1.5h1.25c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H9.25a.75.75 0 010-1.5h1.25v-7H9.25z" fill={primaryFill} /><path d="M6.5 16.75c.41 0 .75.34.75.75V21a.75.75 0 01-1.5 0v-3.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M6.5 16a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const DocumentEndnote24Regular = wrapIcon(rawSvg({}), 'DocumentEndnote24Regular');
export default DocumentEndnote24Regular;
      