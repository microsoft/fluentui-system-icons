import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 100 12A6 6 0 008 2zM5.5 7.5h5a.5.5 0 010 1h-5a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const SubtractCircle16Filled = wrapIcon(rawSvg({}), 'SubtractCircle16Filled');
export default SubtractCircle16Filled;
      