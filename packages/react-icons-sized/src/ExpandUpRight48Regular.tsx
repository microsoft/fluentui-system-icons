import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 12.25a3.75 3.75 0 013.75-3.75h7.88a1.25 1.25 0 100-2.5h-7.88A6.25 6.25 0 006 12.25v23.5C6 39.2 8.8 42 12.25 42h23.5C39.2 42 42 39.2 42 35.75v-7.88a1.25 1.25 0 10-2.5 0v7.88a3.75 3.75 0 01-3.75 3.75H24V29.25c0-2.9-2.35-5.25-5.25-5.25H8.5V12.25zm0 14.25h10.25a2.75 2.75 0 012.75 2.75V39.5h-9.25a3.75 3.75 0 01-3.75-3.75V26.5zM27 7.25c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5a1.25 1.25 0 11-2.5 0v-9.48L29.13 20.63a1.25 1.25 0 01-1.76-1.76L37.73 8.5h-9.48c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const ExpandUpRight48Regular = wrapIcon(rawSvg({}), 'ExpandUpRight48Regular');
export default ExpandUpRight48Regular;
      