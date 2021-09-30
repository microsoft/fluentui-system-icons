import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3.88a.61.61 0 011.13-.34.75.75 0 001.24-.83 2.11 2.11 0 10-2.09 3.26c.07.02.14.03.22.03h3.34a5.47 5.47 0 014.72-.78.75.75 0 00-.75-.72H4.11a.61.61 0 01-.61-.62z" fill={primaryFill} /><path d="M4.75 7h1.5a5.5 5.5 0 00-.88 1.5h-.62a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M2.75 9.5h2.34a5.53 5.53 0 00-.07 1.5H2.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M4.75 12h.46c.15.54.38 1.04.68 1.5H4.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M7.75 2a.75.75 0 100 1.5h5.5a.75.75 0 000-1.5h-5.5z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V10H8.5a.5.5 0 000 1H10v1.5a.5.5 0 001 0V11h1.5a.5.5 0 000-1H11V8.5z" fill={primaryFill} /></svg>;
}

const ReadingListAdd16Filled = wrapIcon(rawSvg({}), 'ReadingListAdd16Filled');
export default ReadingListAdd16Filled;
      