import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 15a1 1 0 110 2H11a1 1 0 110-2h10zm9 1a14 14 0 11-28 0 14 14 0 0128 0zm-2 0a12 12 0 10-24 0 12 12 0 0024 0z" fill={primaryFill} /></svg>;
}

const SubtractCircle32Regular = wrapIcon(rawSvg({}), 'SubtractCircle32Regular');
export default SubtractCircle32Regular;
      