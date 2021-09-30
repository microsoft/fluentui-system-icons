import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.25 4.5a.75.75 0 000-1.5h-2.5a.75.75 0 000 1.5h2.5z" fill={primaryFill} /><path d="M3.75 10c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M20.25 10a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0v-2.5a.75.75 0 00-.75-.75z" fill={primaryFill} /><path d="M3.75 21a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H3.75z" fill={primaryFill} /><path d="M3 17.75c0 .41.34.75.75.75h16.5a.75.75 0 000-1.5H3.75a.75.75 0 00-.75.75z" fill={primaryFill} /><path d="M7 3.75A.75.75 0 006.25 3h-.5A2.75 2.75 0 003 5.75v.5a.75.75 0 001.5 0v-.5c0-.69.56-1.25 1.25-1.25h.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M17.75 3a.75.75 0 000 1.5h.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 001.5 0v-.5A2.75 2.75 0 0018.25 3h-.5z" fill={primaryFill} /></svg>;
}

const BorderBottomDouble24Regular = wrapIcon(rawSvg({}), 'BorderBottomDouble24Regular');
export default BorderBottomDouble24Regular;
      