import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 5.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-4.5 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM3.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.5 3.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM8 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-6-1.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" fill={primaryFill} /></svg>;
}

const ReOrderDotsHorizontal16Filled = wrapIcon(rawSvg({}), 'ReOrderDotsHorizontal16Filled');
export default ReOrderDotsHorizontal16Filled;
      