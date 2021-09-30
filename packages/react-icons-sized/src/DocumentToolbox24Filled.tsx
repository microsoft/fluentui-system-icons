import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10.5c0 .83-.67 1.5-1.5 1.5H13v-5a2 2 0 00-2-2h-1v-1a2 2 0 00-2-2H5a2 2 0 00-1 .27V3.5C4 2.67 4.67 2 5.5 2H12z" fill={primaryFill} /><path d="M13.5 2.5V8c0 .28.22.5.5.5h5.5l-6-6z" fill={primaryFill} /><path d="M4 16v-1.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V16h1.5c.83 0 1.5.67 1.5 1.5V19H9v-.5a.5.5 0 00-1 0v.5H5v-.5a.5.5 0 00-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H4zm1-1.5V16h3v-1.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5z" fill={primaryFill} /><path d="M9 20h3v1.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 011 21.5V20h3v.5a.5.5 0 001 0V20h3v.5a.5.5 0 001 0V20z" fill={primaryFill} /></svg>;
}

const DocumentToolbox24Filled = wrapIcon(rawSvg({}), 'DocumentToolbox24Filled');
export default DocumentToolbox24Filled;
      