import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 6a5 5 0 1110 0A5 5 0 011 6zm4.85-1.85a.5.5 0 10-.7.7L6.29 6 5.15 7.15a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5z" fill={primaryFill} /></svg>;
}

const ChevronCircleRight12Filled = wrapIcon(rawSvg({}), 'ChevronCircleRight12Filled');
export default ChevronCircleRight12Filled;
      