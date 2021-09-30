import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 20a1 1 0 102 0V4a1 1 0 10-2 0v16z" fill={primaryFill} /><path d="M20.75 19.05a1.75 1.75 0 01-2.77 1.42l-10.47-7.5c-1-.72-.97-2.23.08-2.9l10.47-6.71c1.16-.75 2.69.09 2.69 1.47v14.22z" fill={primaryFill} /></svg>;
}

const Previous24Filled = wrapIcon(rawSvg({}), 'Previous24Filled');
export default Previous24Filled;
      