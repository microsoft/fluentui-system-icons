import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.25C2 5.01 3 4 4.25 4h15.5C20.99 4 22 5 22 6.25v11.5c0 1.24-1 2.25-2.25 2.25H4.25C3.01 20 2 19 2 17.75V6.25zm2.25-.75a.75.75 0 00-.75.75v11.5c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V6.25a.75.75 0 00-.75-.75H4.25z" fill={primaryFill} /><path d="M8.22 8.22c.3-.3.77-.3 1.06 0L12 10.94l2.72-2.72a.75.75 0 011.06 1.06L13.06 12l2.72 2.72a.75.75 0 11-1.06 1.06L12 13.06l-2.72 2.72a.75.75 0 01-1.06-1.06L10.94 12 8.22 9.28a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const ShareScreenStop24Regular = wrapIcon(rawSvg({}), 'ShareScreenStop24Regular');
export default ShareScreenStop24Regular;
      