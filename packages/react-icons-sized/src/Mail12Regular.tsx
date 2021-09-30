import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3C2.67 3 2 3.67 2 4.5v3C2 8.33 2.67 9 3.5 9h5c.83 0 1.5-.67 1.5-1.5v-3C10 3.67 9.33 3 8.5 3h-5zM3 4.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v.17L6 5.96 3 4.67V4.5zm0 1.26l2.8 1.2a.5.5 0 00.4 0L9 5.76V7.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V5.76z" fill={primaryFill} /></svg>;
}

const Mail12Regular = wrapIcon(rawSvg({}), 'Mail12Regular');
export default Mail12Regular;
      