import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 7.5a1.98 1.98 0 013.63-1.09.75.75 0 001.25-.83 3.48 3.48 0 10-2.94 5.4c.05.02.1.02.14.02h15.67a.75.75 0 000-1.5H5.62a.75.75 0 00-.14-.01c-1.1 0-1.98-.89-1.98-1.98z" fill={primaryFill} /><path d="M11.75 6a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5h-13.5z" fill={primaryFill} /><path d="M6.75 13.25a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H6.75z" fill={primaryFill} /><path d="M2 17.75c0-.41.33-.75.75-.75h18.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M6.74 20.5a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H6.74z" fill={primaryFill} /></svg>;
}

const ReadingList28Regular = wrapIcon(rawSvg({}), 'ReadingList28Regular');
export default ReadingList28Regular;
      