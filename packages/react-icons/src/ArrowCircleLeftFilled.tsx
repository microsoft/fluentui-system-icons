import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18a8 8 0 110-16 8 8 0 010 16zm-.85-4.65a.5.5 0 00.7-.7L7.71 10.5h5.79a.5.5 0 000-1H7.7l2.15-2.15a.5.5 0 00-.7-.7l-3 3a.5.5 0 000 .7l3 3z" fill={primaryFill} /></svg>;
}

const ArrowCircleLeftFilled = wrapIcon(rawSvg({}), 'ArrowCircleLeftFilled');
export default ArrowCircleLeftFilled;
      