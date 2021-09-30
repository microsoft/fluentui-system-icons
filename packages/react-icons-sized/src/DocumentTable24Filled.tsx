import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 13.25c0-.14.11-.25.25-.25H10v1.5H8.5v-1.25zm0 2.75H10v1.5H8.75a.25.25 0 01-.25-.25V16zm7 1.25V16h-4v1.5h3.75c.14 0 .25-.11.25-.25zm-4-4.25v1.5h4v-1.25a.25.25 0 00-.25-.25H11.5zm.5-5V2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V10h-6a2 2 0 01-2-2zm-3.25 3.5h6.5c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75h-6.5C7.78 19 7 18.22 7 17.25v-4c0-.97.78-1.75 1.75-1.75zM13.5 8V2.5l6 6H14a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentTable24Filled = wrapIcon(rawSvg({}), 'DocumentTable24Filled');
export default DocumentTable24Filled;
      