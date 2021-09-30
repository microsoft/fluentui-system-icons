import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.06 5.24a.75.75 0 10-1.12-.98l-1.75 2a.75.75 0 000 .98l1.75 2a.75.75 0 001.12-.98L5.4 7.5h2.86a.75.75 0 000-1.5H5.4l.66-.76zM18.02 4.2a.75.75 0 00-.07 1.05l.66.76h-2.86a.75.75 0 000 1.5h2.86l-.66.76a.75.75 0 001.13.98l1.75-2a.75.75 0 000-.98l-1.75-2a.75.75 0 00-1.06-.07zM5.75 11A2.75 2.75 0 003 13.75v4a2.75 2.75 0 002.75 2.75h12.5A2.75 2.75 0 0021 17.75v-4A2.75 2.75 0 0018.25 11H5.75zM6 15.75c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowAutofitContent24Filled = wrapIcon(rawSvg({}), 'ArrowAutofitContent24Filled');
export default ArrowAutofitContent24Filled;
      