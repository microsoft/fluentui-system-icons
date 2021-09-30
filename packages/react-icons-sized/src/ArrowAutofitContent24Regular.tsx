import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.19c.3.27.34.74.06 1.05L5.4 6h2.86a.75.75 0 010 1.5H5.4l.66.76a.75.75 0 01-1.12.98l-1.75-2a.75.75 0 010-.98l1.75-2a.75.75 0 011.05-.07zm11.95 1.05a.75.75 0 011.13-.98l1.75 2c.25.28.25.7 0 .98l-1.75 2a.75.75 0 01-1.13-.98l.66-.76h-2.86a.75.75 0 010-1.5h2.86l-.66-.76zM6 15.75c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM5.75 11A2.75 2.75 0 003 13.75v4a2.75 2.75 0 002.75 2.75h12.5A2.75 2.75 0 0021 17.75v-4A2.75 2.75 0 0018.25 11H5.75zM4.5 13.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25v-4z" fill={primaryFill} /></svg>;
}

const ArrowAutofitContent24Regular = wrapIcon(rawSvg({}), 'ArrowAutofitContent24Regular');
export default ArrowAutofitContent24Regular;
      