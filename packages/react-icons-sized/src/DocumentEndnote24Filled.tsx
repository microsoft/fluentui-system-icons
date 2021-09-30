import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10.5c0 .83-.67 1.5-1.5 1.5H13v-8a2 2 0 00-2-2H4V3.5C4 2.67 4.67 2 5.5 2H12z" fill={primaryFill} /><path d="M13.5 2.5V8c0 .28.22.5.5.5h5.5l-6-6z" fill={primaryFill} /><path d="M7.25 17.5a.75.75 0 00-1.5 0V21a.75.75 0 001.5 0v-3.5z" fill={primaryFill} /><path d="M7.25 15.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M4.5 13.75c0 .41-.34.75-.75.75H2.5v7h1.25a.75.75 0 010 1.5H2.5A1.5 1.5 0 011 21.5v-7c0-.83.67-1.5 1.5-1.5h1.25c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M9.25 14.5a.75.75 0 010-1.5h1.25c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H9.25a.75.75 0 010-1.5h1.25v-7H9.25z" fill={primaryFill} /></svg>;
}

const DocumentEndnote24Filled = wrapIcon(rawSvg({}), 'DocumentEndnote24Filled');
export default DocumentEndnote24Filled;
      