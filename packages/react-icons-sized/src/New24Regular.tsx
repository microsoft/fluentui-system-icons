import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 4c.41 0 .75.34.75.75v8.5a.75.75 0 01-1.5 0v-8.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M4 18.25c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M8.28 7.22a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 101.06-1.06l-6.5-6.5z" fill={primaryFill} /></svg>;
}

const New24Regular = wrapIcon(rawSvg({}), 'New24Regular');
export default New24Regular;
      