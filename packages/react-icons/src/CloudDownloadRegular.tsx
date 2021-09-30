import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 013.27 3.66c-.32-.4-.7-.76-1.12-1.07a2.3 2.3 0 00-2.15-1.6h-.07a1 1 0 01-1-.9C13.45 4.33 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 01-1 .9h-.07A2.33 2.33 0 003 9.62 2.33 2.33 0 005.28 12h2.67c-.09.32-.15.66-.18 1H5.28A3.33 3.33 0 012 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2zm3.5 16a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.6-4.9L14 14.2v-2.7a.5.5 0 00-1 0v2.7l-1.1-1.1a.56.56 0 10-.8.8l2 2c.22.22.58.22.8 0l2-2a.56.56 0 10-.8-.8z" fill={primaryFill} /></svg>;
}

const CloudDownloadRegular = wrapIcon(rawSvg({}), 'CloudDownloadRegular');
export default CloudDownloadRegular;
      