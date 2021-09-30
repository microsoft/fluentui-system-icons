import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.47 9.64l-.7-5.87v-.08c0-.88.72-1.6 1.6-1.6.8 0 1.55.42 1.98 1.13l.1.16 2.94 6.09 3.95-.12a2.6 2.6 0 012.68 2.53v.07a2.6 2.6 0 01-2.62 2.6l-3.97-.12-2.99 6.19a2.3 2.3 0 01-2.06 1.3c-.9 0-1.61-.73-1.61-1.64v-.12l.71-5.9-2.13-.07-.27.74a1.95 1.95 0 01-1.83 1.28c-.87 0-1.58-.71-1.58-1.59v-.76l-.16-.03a1.92 1.92 0 010-3.76l.16-.03v-.76c0-.8.6-1.48 1.43-1.58h.15c.75 0 1.43.42 1.77 1.12l.06.15.27.74 2.12-.07zm.9-6.05c-.05 0-.1.04-.1.08l.88 7.42-4.84.15-.62-1.72-.04-.08c-.07-.15-.23-.25-.35-.25h-.06a.09.09 0 00-.07.09v1.98l-1.35.28a.42.42 0 000 .82l1.35.28v1.98c0 .05.03.09.08.09.19 0 .36-.12.42-.3l.64-1.75 4.86.15-.9 7.47v.03c0 .06.05.1.1.1a.8.8 0 00.72-.44l3.42-7.07 4.9.15c.61 0 1.1-.5 1.1-1.09v-.04a1.1 1.1 0 00-1.12-1.07l-4.93.15-3.35-6.93-.06-.1a.8.8 0 00-.67-.38z" fill={primaryFill} /></svg>;
}

const Airplane24Regular = wrapIcon(rawSvg({}), 'Airplane24Regular');
export default Airplane24Regular;
      