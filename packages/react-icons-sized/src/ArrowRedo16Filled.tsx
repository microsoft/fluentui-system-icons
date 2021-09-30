import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 2.75a.75.75 0 00-1.5 0v3.1L8.83 3.16a4 4 0 00-5.66 5.66l4.95 4.95a.75.75 0 101.06-1.06L4.23 7.77a2.5 2.5 0 013.54-3.54l2.26 2.27H7.75a.75.75 0 100 1.5h4.4c.47 0 .85-.38.85-.85v-4.4z" fill={primaryFill} /></svg>;
}

const ArrowRedo16Filled = wrapIcon(rawSvg({}), 'ArrowRedo16Filled');
export default ArrowRedo16Filled;
      