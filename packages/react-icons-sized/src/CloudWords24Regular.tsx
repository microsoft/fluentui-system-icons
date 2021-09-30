import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 9a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4zM5 13.75c0-.41.34-.75.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75zm8.75-.75a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4zm-2-8a5.75 5.75 0 00-5.66 4.75H6a4 4 0 000 8h11.5a4 4 0 000-8h-.09A5.75 5.75 0 0011.75 5zm-4.24 5.54a4.25 4.25 0 018.48 0c.02.4.35.71.75.71h.76a2.5 2.5 0 010 5H6a2.5 2.5 0 010-5h.76c.4 0 .73-.31.75-.71z" fill={primaryFill} /></svg>;
}

const CloudWords24Regular = wrapIcon(rawSvg({}), 'CloudWords24Regular');
export default CloudWords24Regular;
      