import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H13v-5a2 2 0 00-2-2h-1v-1a2 2 0 00-2-2H5a2 2 0 00-1 .27V3.5C4 2.67 4.67 2 5.5 2H10z" fill={primaryFill} /><path d="M11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25z" fill={primaryFill} /><path d="M4 12v-1.5C4 9.67 4.67 9 5.5 9h2c.83 0 1.5.67 1.5 1.5V12h1.5c.83 0 1.5.67 1.5 1.5V15H9v-.5a.5.5 0 00-1 0v.5H5v-.5a.5.5 0 00-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H4zm1-1.5V12h3v-1.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5z" fill={primaryFill} /><path d="M9 16h3v1.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 011 17.5V16h3v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z" fill={primaryFill} /></svg>;
}

const DocumentToolboxFilled = wrapIcon(rawSvg({}), 'DocumentToolboxFilled');
export default DocumentToolboxFilled;
      