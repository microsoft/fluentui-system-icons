import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 24a20 20 0 1040 0 20 20 0 00-40 0zm19.87 8.63a1.25 1.25 0 010-1.76l5.61-5.62H15.25a1.25 1.25 0 110-2.5h14.23l-5.61-5.62a1.25 1.25 0 011.76-1.76l7.75 7.75c.5.48.5 1.28 0 1.76l-7.75 7.75c-.48.5-1.28.5-1.76 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight48Filled = wrapIcon(rawSvg({}), 'ArrowCircleRight48Filled');
export default ArrowCircleRight48Filled;
      