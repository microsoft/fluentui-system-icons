import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.3 2.48a3.5 3.5 0 00-2.6 0l-5.76 2.3A1.5 1.5 0 002 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3.3.1v-1.06L3.31 14.3a.5.5 0 01-.31-.47V6.24l6.5 2.6V12c.26-.34.6-.62 1-.8V8.85l6.5-2.6V9.5c.5.37.84.91.96 1.54l.04.01V6.18a1.5 1.5 0 00-.94-1.4l-5.76-2.3zm-2.23.93a2.5 2.5 0 011.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54zm-2.7 1.08l6.16 2.46L10 7.96 3.85 5.5l2.53-1.01zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm3.5-1h-2a.5.5 0 00-.5.5v.5h3v-.5a.5.5 0 00-.5-.5zm1.5 5.5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const BoxToolbox20Regular = wrapIcon(rawSvg({}), 'BoxToolbox20Regular');
export default BoxToolbox20Regular;
      