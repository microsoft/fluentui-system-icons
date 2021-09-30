import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.58 2.15A1 1 0 002 2.96v10.07a1 1 0 001.58.82l7.13-5.03a1 1 0 000-1.64L3.58 2.15zM3 2.96L10.13 8 3 13.03V2.96z" fill={primaryFill} /><path d="M14 2.5a.5.5 0 00-1 0v11a.5.5 0 001 0v-11z" fill={primaryFill} /></svg>;
}

const Next16Regular = wrapIcon(rawSvg({}), 'Next16Regular');
export default Next16Regular;
      