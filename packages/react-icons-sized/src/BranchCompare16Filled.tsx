import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.15 5.85a.5.5 0 10.7-.7L8.71 4h1.79c.83 0 1.5.67 1.5 1.5v4.55a2.5 2.5 0 101 0V5.5A2.5 2.5 0 0010.5 3H8.7l1.15-1.15a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2zM6 3.5a2.5 2.5 0 01-2 2.45v4.55c0 .83.67 1.5 1.5 1.5h1.8l-1.15-1.15a.5.5 0 01.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L7.29 13H5.5A2.5 2.5 0 013 10.5V5.95A2.5 2.5 0 116 3.5z" fill={primaryFill} /></svg>;
}

const BranchCompare16Filled = wrapIcon(rawSvg({}), 'BranchCompare16Filled');
export default BranchCompare16Filled;
      