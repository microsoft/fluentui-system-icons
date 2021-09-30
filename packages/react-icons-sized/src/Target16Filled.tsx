import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 9a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM8 6a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm6-4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill={primaryFill} /></svg>;
}

const Target16Filled = wrapIcon(rawSvg({}), 'Target16Filled');
export default Target16Filled;
      