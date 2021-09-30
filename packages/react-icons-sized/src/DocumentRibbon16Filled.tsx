import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1v3.5C8 5.33 8.67 6 9.5 6H13v7.5c0 .83-.67 1.5-1.5 1.5H6.98l.02-.25v-3.1a4 4 0 00-4-6.52V2.5C3 1.67 3.67 1 4.5 1H8zm1 .25V4.5c0 .28.22.5.5.5h3.25L9 1.25zM7 9a3 3 0 11-6 0 3 3 0 016 0zm-1 3.46a3.98 3.98 0 01-4 0v2.29c0 .2.21.31.38.21L4 14l1.62.96c.17.1.38-.02.38-.21v-2.29z" fill={primaryFill} /></svg>;
}

const DocumentRibbon16Filled = wrapIcon(rawSvg({}), 'DocumentRibbon16Filled');
export default DocumentRibbon16Filled;
      