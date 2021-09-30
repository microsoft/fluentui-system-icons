import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8A6 6 0 112 8a6 6 0 0112 0zM3 8h10A5 5 0 003 8z" fill={primaryFill} /></svg>;
}

const CircleHalfFill16Regular = wrapIcon(rawSvg({}), 'CircleHalfFill16Regular');
export default CircleHalfFill16Regular;
      