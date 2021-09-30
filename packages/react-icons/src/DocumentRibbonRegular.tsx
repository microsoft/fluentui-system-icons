import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v5.13A4 4 0 015 9V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1H8v1h6a2 2 0 002-2V7.4c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM8 13a3 3 0 11-6 0 3 3 0 016 0zm-1 3.46a3.98 3.98 0 01-4 0v2.29c0 .2.21.31.38.21L5 18l1.62.96c.17.1.38-.02.38-.21v-2.29z" fill={primaryFill} /></svg>;
}

const DocumentRibbonRegular = wrapIcon(rawSvg({}), 'DocumentRibbonRegular');
export default DocumentRibbonRegular;
      