import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4A2.75 2.75 0 002 6.75v10.5A2.75 2.75 0 004.75 20h9c-.3-.46-.51-.96-.64-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v4.87c.95.67 1.5 1.78 1.5 2.88V6.75A2.75 2.75 0 0019.25 4H4.75z" fill={primaryFill} /><path d="M16.52 20a2.98 2.98 0 01-1.34-1.5c-.12-.3-.18-.64-.18-1a.5.5 0 00-1 0c0 .34.05.68.15 1 .17.55.47 1.06.87 1.5A4.77 4.77 0 0018 21.47v1.03a.5.5 0 001 0v-1.03c2.25-.25 4-1.97 4-3.97a.5.5 0 00-1 0c0 1.75-1.57 3-3.5 3a4 4 0 01-1.98-.5z" fill={primaryFill} /><path d="M18.5 19.5c-.86 0-1.56-.41-2-1-.32-.44-.5-.97-.5-1.5v-2.5a2.5 2.5 0 015 0V17c0 1.25-1 2.5-2.5 2.5z" fill={primaryFill} /><path d="M6.75 8a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /><path d="M6 11.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M6 14.75c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const SlideMicrophone24Regular = wrapIcon(rawSvg({}), 'SlideMicrophone24Regular');
export default SlideMicrophone24Regular;
      