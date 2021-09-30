import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31 14.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM6 10.75A4.75 4.75 0 0110.75 6h26.5A4.75 4.75 0 0142 10.75v26.5c0 .86-.23 1.66-.63 2.36L26.63 25.08a3.75 3.75 0 00-5.26 0L6.63 39.62c-.4-.7-.63-1.5-.63-2.36v-26.5zM26 17a5 5 0 1010 0 5 5 0 00-10 0zM8.4 41.38c.69.4 1.5.62 2.35.62h26.5c.86 0 1.66-.23 2.36-.63l-14.73-14.5a1.25 1.25 0 00-1.76 0L8.4 41.37z" fill={primaryFill} /></svg>;
}

const Image48Filled = wrapIcon(rawSvg({}), 'Image48Filled');
export default Image48Filled;
      