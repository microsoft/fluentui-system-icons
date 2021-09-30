import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 3.5a2.5 2.5 0 01-2 2.45V8h4.5c.83 0 1.5-.67 1.5-1.5v-.55a2.5 2.5 0 111 0v.55A2.5 2.5 0 019.5 9H5v1.05a2.5 2.5 0 11-1 0v-4.1A2.5 2.5 0 117 3.5z" fill={primaryFill} /></svg>;
}

const BranchFork16Filled = wrapIcon(rawSvg({}), 'BranchFork16Filled');
export default BranchFork16Filled;
      