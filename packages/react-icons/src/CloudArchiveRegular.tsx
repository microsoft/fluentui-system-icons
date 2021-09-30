import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4c2.82 0 4.41 1.92 4.65 4.25h.07c1.24 0 2.32.7 2.88 1.75h-1.21a2.24 2.24 0 00-1.67-.75h-.07a1 1 0 01-1-.9C13.45 6.32 12.11 5 10 5S6.55 6.32 6.35 8.35a1 1 0 01-1 .9h-.07A2.33 2.33 0 003 11.62 2.33 2.33 0 005.28 14H10v1H5.28A3.33 3.33 0 012 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4zm0 8a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1zm8 2h-7v3c0 1.1.9 2 2 2h3a2 2 0 002-2v-3zm-4.5 1h2a.5.5 0 010 1h-2a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const CloudArchiveRegular = wrapIcon(rawSvg({}), 'CloudArchiveRegular');
export default CloudArchiveRegular;
      