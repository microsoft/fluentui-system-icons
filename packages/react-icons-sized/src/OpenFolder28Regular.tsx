import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 7.75A4.75 4.75 0 017.75 3h12.5A4.75 4.75 0 0125 7.75v5.5a.75.75 0 01-1.5 0v-5.5c0-1.8-1.46-3.25-3.25-3.25H7.75A3.25 3.25 0 004.5 7.75v12.5c0 1.8 1.46 3.25 3.25 3.25h5.5a.75.75 0 010 1.5h-5.5A4.75 4.75 0 013 20.25V7.75z" fill={primaryFill} /><path d="M10.5 11.25c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-5.63l8.66 8.72a.75.75 0 11-1.06 1.06L12 13v5.75a.75.75 0 01-1.5 0v-7.5z" fill={primaryFill} /></svg>;
}

const OpenFolder28Regular = wrapIcon(rawSvg({}), 'OpenFolder28Regular');
export default OpenFolder28Regular;
      