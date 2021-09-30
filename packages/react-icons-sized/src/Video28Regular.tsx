import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 5.5A3.25 3.25 0 002 8.75v10.5c0 1.8 1.46 3.25 3.25 3.25h10.5c1.8 0 3.25-1.46 3.25-3.25v-1.58l4.54 3.11c.83.57 1.96-.02 1.96-1.03V8.25c0-1-1.13-1.6-1.96-1.03L19 10.32V8.76c0-1.8-1.45-3.25-3.25-3.25H5.25zM19 15.85v-3.7l5-3.43v10.56l-5-3.43zm-1.5-7.1v10.5c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75V8.75C3.5 7.78 4.28 7 5.25 7h10.5c.97 0 1.75.78 1.75 1.75z" fill={primaryFill} /></svg>;
}

const Video28Regular = wrapIcon(rawSvg({}), 'Video28Regular');
export default Video28Regular;
      