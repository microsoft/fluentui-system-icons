import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 9A6.25 6.25 0 004 15.25v17.5C4 36.2 6.8 39 10.25 39h17.5C31.2 39 34 36.2 34 32.75v-2.44l5.96 4.66A2.5 2.5 0 0044 33V15a2.5 2.5 0 00-4.04-1.97L34 17.7v-2.44C34 11.8 31.2 9 27.75 9h-17.5zM34 20.86L41.5 15v18L34 27.14v-6.28zm-2.5-5.61v17.5a3.75 3.75 0 01-3.75 3.75h-17.5a3.75 3.75 0 01-3.75-3.75v-17.5a3.75 3.75 0 013.75-3.75h17.5a3.75 3.75 0 013.75 3.75z" fill={primaryFill} /></svg>;
}

const Video48Regular = wrapIcon(rawSvg({}), 'Video48Regular');
export default Video48Regular;
      