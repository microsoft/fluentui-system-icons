import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2.25A5.75 5.75 0 006.09 7H6a4 4 0 100 8h7.16l.14-.42c.13-.41.35-.78.62-1.08H6a2.5 2.5 0 010-5h.76c.4 0 .73-.31.75-.71a4.25 4.25 0 018.48 0c.02.4.35.71.75.71h.76c1.03 0 1.9.62 2.3 1.5h1.58a4 4 0 00-3.88-3h-.09a5.75 5.75 0 00-5.66-4.75zm4.75 9.5c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-4a.75.75 0 01-.75-.75V15h-.32a.54.54 0 00-.51.37l-.92 2.74a2.04 2.04 0 01-1.93 1.39H12v1.75c0 .41-.34.75-.75.75h-4a.75.75 0 01-.75-.75v-4c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75V18h.82c.23 0 .44-.15.51-.37l.92-2.74a2.04 2.04 0 011.93-1.39h.32v-1.75zm1.5 2.52V15h2.5v-2.5H18v1.73a1.06 1.06 0 010 .04zM8 18v2.5h2.5V18H8z" fill={primaryFill} /></svg>;
}

const CloudFlow24Regular = wrapIcon(rawSvg({}), 'CloudFlow24Regular');
export default CloudFlow24Regular;
      