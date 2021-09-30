import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 44a20 20 0 100-40 20 20 0 000 40zm8.63-19.87c-.48.5-1.28.5-1.76 0l-5.62-5.61v14.23a1.25 1.25 0 11-2.5 0V18.52l-5.62 5.61a1.25 1.25 0 01-1.76-1.76l7.75-7.75a1.25 1.25 0 011.76 0l7.75 7.75c.5.48.5 1.28 0 1.76z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp48Filled = wrapIcon(rawSvg({}), 'ArrowCircleUp48Filled');
export default ArrowCircleUp48Filled;
      