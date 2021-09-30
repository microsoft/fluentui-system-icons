import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.74A5.5 5.5 0 004 9.2V3.5C4 2.67 4.67 2 5.5 2H10z" fill={primaryFill} /><path d="M11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25z" fill={primaryFill} /><path d="M2.32 17.68a4.5 4.5 0 106.36-6.36 4.5 4.5 0 00-6.36 6.36zm1.41-4.95c.2-.2.51-.2.7 0L5.5 13.8l1.06-1.06a.5.5 0 11.7.7L6.22 14.5l1.06 1.06a.5.5 0 11-.71.7L5.5 15.22l-1.06 1.06a.5.5 0 11-.7-.71l1.05-1.06-1.06-1.06a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const DocumentDismissFilled = wrapIcon(rawSvg({}), 'DocumentDismissFilled');
export default DocumentDismissFilled;
      