import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 6.75a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0V8.56l8.72 8.72a.75.75 0 001.06 0l8.5-8.5a.75.75 0 10-1.06-1.06l-7.97 7.97L4.56 7.5h5.7c.4 0 .74-.34.74-.75z" fill={primaryFill} /></svg>;
}

const ArrowBounce24Regular = wrapIcon(rawSvg({}), 'ArrowBounce24Regular');
export default ArrowBounce24Regular;
      