import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 4a.75.75 0 000 1.5h1V7h-.5C14.01 7 13 8 13 9.25v7c0 1.24 1 2.25 2.25 2.25h.5V20h-1a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-1v-1.5h.5c1.24 0 2.25-1 2.25-2.25v-7C20 8.01 19 7 17.75 7h-.5V5.5h1a.75.75 0 000-1.5h-3.5zm-.25 5.25c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V11h-4V9.25zm0 3.25h4v3.75c0 .41-.34.75-.75.75h-2.5a.75.75 0 01-.75-.75V12.5z" fill={primaryFill} /><path d="M5.75 2a.75.75 0 000 1.5h1V5h-.5C5.01 5 4 6 4 7.25v7c0 1.24 1 2.25 2.25 2.25h.5V18h-1a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-1v-1.5h.5c1.24 0 2.25-1 2.25-2.25v-7C11 6.01 10 5 8.75 5h-.5V3.5h1a.75.75 0 000-1.5h-3.5zm.5 13a.75.75 0 01-.75-.75V12.5h4v1.75c0 .41-.34.75-.75.75h-2.5zm3.25-4h-4V7.25c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V11z" fill={primaryFill} /></svg>;
}

const DataWhisker24Regular = wrapIcon(rawSvg({}), 'DataWhisker24Regular');
export default DataWhisker24Regular;
      