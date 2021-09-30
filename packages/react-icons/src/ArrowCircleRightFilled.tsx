import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.85-4.65a.5.5 0 01-.7-.7l2.14-2.15H6.5a.5.5 0 010-1h5.8l-2.15-2.15a.5.5 0 01.7-.7l3 3c.2.2.2.5 0 .7l-3 3z" fill={primaryFill} /></svg>;
}

const ArrowCircleRightFilled = wrapIcon(rawSvg({}), 'ArrowCircleRightFilled');
export default ArrowCircleRightFilled;
      