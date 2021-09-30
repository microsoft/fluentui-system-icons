import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.14 6.5h-2.39a.75.75 0 100 1.5h4.4c.47 0 .85-.38.85-.85v-4.4a.75.75 0 00-1.5 0V5.7l-3.06-2.66a5.25 5.25 0 00-6.88 7.92l8.17 7.1a.75.75 0 10.98-1.13l-8.17-7.1a3.75 3.75 0 114.92-5.66l2.68 2.33z" fill={primaryFill} /></svg>;
}

const ArrowRedo20Filled = wrapIcon(rawSvg({}), 'ArrowRedo20Filled');
export default ArrowRedo20Filled;
      