import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 9a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill={primaryFill} /><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm6-5a5 5 0 100 10A5 5 0 008 3z" fill={primaryFill} /></svg>;
}

const Target16Regular = wrapIcon(rawSvg({}), 'Target16Regular');
export default Target16Regular;
      