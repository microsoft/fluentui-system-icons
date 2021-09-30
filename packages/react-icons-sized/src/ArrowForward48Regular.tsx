import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M34.98 22.5l-7.06 7.06a1.25 1.25 0 001.67 1.86l.1-.1 9.2-9.18c.45-.46.48-1.18.09-1.67l-.1-.1-9.19-9.2a1.25 1.25 0 00-1.86 1.67l.1.1L34.97 20H26c-3.25 0-6.28.72-8.9 2.1l-.41.22a16.51 16.51 0 00-6.37 6.37A18.92 18.92 0 008 38a1.25 1.25 0 002.5 0c0-3 .7-5.76 2-8.1a14.01 14.01 0 015.4-5.4 16.28 16.28 0 017.6-2h9.48z" fill={primaryFill} /></svg>;
}

const ArrowForward48Regular = wrapIcon(rawSvg({}), 'ArrowForward48Regular');
export default ArrowForward48Regular;
      