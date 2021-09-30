import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 10a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M11 10a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M15 10a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" fill={primaryFill} /></svg>;
}

const MoreCircle20Regular = wrapIcon(rawSvg({}), 'MoreCircle20Regular');
export default MoreCircle20Regular;
      