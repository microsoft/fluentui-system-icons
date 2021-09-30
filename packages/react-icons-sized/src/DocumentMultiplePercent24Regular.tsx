import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3.5a.75.75 0 00-.75.75v7.38c-.44-.3-.95-.52-1.5-.6V4.26C4 3.01 5 2 6.25 2h4.38c.6 0 1.17.24 1.6.66l4.61 4.62c.42.42.66 1 .66 1.59v8.38c0 1.24-1 2.25-2.25 2.25h-2.4a3.5 3.5 0 00-.9-1.5h3.3c.41 0 .75-.34.75-.75V9h-3.25c-1.24 0-2.25-1.01-2.25-2.25V3.5H6.25zM12 4.56v2.19c0 .41.34.75.75.75h2.19L12 4.56zM15.25 22h-2.59c.22-.45.34-.96.34-1.5h2.25c1.8 0 3.25-1.46 3.25-3.25V8.94l.84.84c.42.42.66 1 .66 1.59v5.88A4.75 4.75 0 0115.25 22zM3.5 17a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-3.5a1 1 0 110 2 1 1 0 010-2zm6 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-3.5a1 1 0 110 2 1 1 0 010-2zm1.28-5.22a.75.75 0 10-1.06-1.06l-7.5 7.5a.75.75 0 101.06 1.06l7.5-7.5z" fill={primaryFill} /></svg>;
}

const DocumentMultiplePercent24Regular = wrapIcon(rawSvg({}), 'DocumentMultiplePercent24Regular');
export default DocumentMultiplePercent24Regular;
      