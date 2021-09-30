import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.25C4 3.01 5 2 6.25 2h4.25v4.75C10.5 7.99 11.51 9 12.75 9h4.75v8.25c0 1.24-1 2.25-2.25 2.25h-2.4A3.5 3.5 0 009.5 17h-.03l2.02-2.01A1.75 1.75 0 109 12.5L7 14.53v-.03a3.5 3.5 0 00-3-3.46V4.25zm9 16.25c0 .54-.12 1.05-.34 1.5h2.6A4.75 4.75 0 0020 17.25v-5.88c0-.6-.24-1.17-.66-1.6l-.84-.83v8.31c0 1.8-1.45 3.25-3.25 3.25H13zM12 6.75V2.47l.22.19 4.62 4.62.2.22h-4.29a.75.75 0 01-.75-.75zM3.5 17a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-3.5a1 1 0 110 2 1 1 0 010-2zm6 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-3.5a1 1 0 110 2 1 1 0 010-2zm1.28-5.22a.75.75 0 10-1.06-1.06l-7.5 7.5a.75.75 0 101.06 1.06l7.5-7.5z" fill={primaryFill} /></svg>;
}

const DocumentMultiplePercent24Filled = wrapIcon(rawSvg({}), 'DocumentMultiplePercent24Filled');
export default DocumentMultiplePercent24Filled;
      