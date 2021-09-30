import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 11.25a.75.75 0 01-1.5 0V10H14a2 2 0 01-2-2V3.5H6a.5.5 0 00-.5.5v7.25a.75.75 0 01-1.5 0V4c0-1.1.9-2 2-2h6.17a.6.6 0 01.08 0l.06.01c.22.02.43.06.63.14l.16.09c.02 0 .04.02.05.03l.05.02.08.05a2.07 2.07 0 01.3.25l5.83 5.82A2 2 0 0120 9.75v1.5zm-6.5-6.63V8c0 .28.22.5.5.5h3.38L13.5 4.62zM4.75 13c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75zm15.25.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zm-10.5 7.5c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zm-4-2a.75.75 0 00-1.5 0V20c0 1.1.9 2 2 2h1.25a.75.75 0 000-1.5H6a.5.5 0 01-.5-.5v-.75zm13.75-.75a.75.75 0 00-.75.75V20a.5.5 0 01-.5.5h-1.25a.75.75 0 000 1.5H18a2 2 0 002-2v-.75a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const DocumentSplitHint24Regular = wrapIcon(rawSvg({}), 'DocumentSplitHint24Regular');
export default DocumentSplitHint24Regular;
      