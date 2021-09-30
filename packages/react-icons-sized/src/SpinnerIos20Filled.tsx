import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3.5A6.5 6.5 0 003.5 10 .75.75 0 012 10a8 8 0 118 8 .75.75 0 010-1.5 6.5 6.5 0 100-13z" fill={primaryFill} /></svg>;
}

const SpinnerIos20Filled = wrapIcon(rawSvg({}), 'SpinnerIos20Filled');
export default SpinnerIos20Filled;
      