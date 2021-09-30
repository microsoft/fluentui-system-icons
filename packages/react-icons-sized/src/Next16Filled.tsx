import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 2.96a1 1 0 011.58-.81l7.13 5.03a1 1 0 010 1.64l-7.13 5.03A1 1 0 012 13.03V2.96z" fill={primaryFill} /><path d="M14 2.75a.75.75 0 00-1.5 0v10.5a.75.75 0 001.5 0V2.75z" fill={primaryFill} /></svg>;
}

const Next16Filled = wrapIcon(rawSvg({}), 'Next16Filled');
export default Next16Filled;
      