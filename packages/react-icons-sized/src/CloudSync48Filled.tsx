import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 6a11 11 0 00-10.96 10h-.29a7.75 7.75 0 000 15.5h7.34a13 13 0 0122.86-6.87 7.75 7.75 0 00-7.7-8.63h-.3A11 11 0 0024 6zm-2 27a11 11 0 1022 0 11 11 0 00-22 0zm8.65-7.1A7 7 0 0138 27.6V27a1 1 0 112 0v3a1 1 0 01-1 1h-3a1 1 0 110-2h.57a5 5 0 00-7.1-.04 1 1 0 01-1.42-1.41 7 7 0 012.6-1.64zm4.7 14.2A7 7 0 0128 38.4v.6a1 1 0 11-2 0v-3a1 1 0 011-1h3a1 1 0 110 2h-.57a5 5 0 007.1.04 1 1 0 011.42 1.41 7 7 0 01-2.6 1.64z" fill={primaryFill} /></svg>;
}

const CloudSync48Filled = wrapIcon(rawSvg({}), 'CloudSync48Filled');
export default CloudSync48Filled;
      