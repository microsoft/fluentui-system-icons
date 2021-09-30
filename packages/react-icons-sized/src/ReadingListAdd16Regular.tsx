import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4a1 1 0 011.84-.56.5.5 0 10.83-.55A2 2 0 104.07 6h3.27c.89-.63 1.98-1 3.15-1H4.08a.5.5 0 00-.04 0A1 1 0 013 4z" fill={primaryFill} /><path d="M3.5 7h2.76c-.26.3-.48.64-.66 1H3.5a.5.5 0 110-1z" fill={primaryFill} /><path d="M2.5 9h2.7c-.08.32-.15.66-.18 1H2.5a.5.5 0 010-1z" fill={primaryFill} /><path d="M3.5 11h1.52c.03.34.1.68.19 1H3.5a.5.5 0 010-1z" fill={primaryFill} /><path d="M7.5 3a.5.5 0 000 1h6a.5.5 0 000-1h-6z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V10H8.5a.5.5 0 000 1H10v1.5a.5.5 0 001 0V11h1.5a.5.5 0 000-1H11V8.5z" fill={primaryFill} /></svg>;
}

const ReadingListAdd16Regular = wrapIcon(rawSvg({}), 'ReadingListAdd16Regular');
export default ReadingListAdd16Regular;
      