import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5a3 3 0 01-2.5 2.96V10H12c.83 0 1.5-.67 1.5-1.5v-.54a3 3 0 111 0v.54A2.5 2.5 0 0112 11H6.5v1.04a3 3 0 11-1 0V7.96A3 3 0 119 5z" fill={primaryFill} /></svg>;
}

const BranchForkFilled = wrapIcon(rawSvg({}), 'BranchForkFilled');
export default BranchForkFilled;
      