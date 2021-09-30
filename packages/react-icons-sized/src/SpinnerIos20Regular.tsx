import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a7 7 0 00-7 7 .5.5 0 01-1 0 8 8 0 118 8 .5.5 0 010-1 7 7 0 100-14z" fill={primaryFill} /></svg>;
}

const SpinnerIos20Regular = wrapIcon(rawSvg({}), 'SpinnerIos20Regular');
export default SpinnerIos20Regular;
      