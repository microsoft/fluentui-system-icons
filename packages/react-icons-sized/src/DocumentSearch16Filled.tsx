import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1v3.5C8 5.33 8.67 6 9.5 6H13v7.5c0 .83-.67 1.5-1.5 1.5h-.59a1.5 1.5 0 00-.35-1.56l-2-2A4.5 4.5 0 003 5.26V2.5C3 1.67 3.67 1 4.5 1H8zm1 .25V4.5c0 .28.22.5.5.5h3.25L9 1.25zM6.6 12.3a3.5 3.5 0 11.7-.7l2.55 2.55a.5.5 0 01-.7.7L6.6 12.3zM7 9.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const DocumentSearch16Filled = wrapIcon(rawSvg({}), 'DocumentSearch16Filled');
export default DocumentSearch16Filled;
      