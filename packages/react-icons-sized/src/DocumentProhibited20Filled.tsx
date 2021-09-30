import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.74A5.5 5.5 0 004 9.2V3.5C4 2.67 4.67 2 5.5 2H10z" fill={primaryFill} /><path d="M11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25z" fill={primaryFill} /><path d="M2.32 11.32a4.5 4.5 0 106.36 6.36 4.5 4.5 0 00-6.36-6.36zm5.65 5.65a3.5 3.5 0 01-4.57.33l4.9-4.9a3.5 3.5 0 01-.33 4.57zM7.6 11.7l-4.9 4.9a3.5 3.5 0 014.9-4.9z" fill={primaryFill} /></svg>;
}

const DocumentProhibited20Filled = wrapIcon(rawSvg({}), 'DocumentProhibited20Filled');
export default DocumentProhibited20Filled;
      