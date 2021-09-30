import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.14 3.38A2.75 2.75 0 006 5.76v16.48c0 2.13 2.3 3.45 4.14 2.38l14.7-8.6a2.35 2.35 0 000-4.05l-14.7-8.59z" fill={primaryFill} /></svg>;
}

const Play28Filled = wrapIcon(rawSvg({}), 'Play28Filled');
export default Play28Filled;
      