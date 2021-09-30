import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 2.5a.5.5 0 10-1 0v3.84L8.83 3.17a4 4 0 00-5.66 5.66l5.03 5.02a.5.5 0 00.7-.7L3.88 8.12a3 3 0 114.24-4.24L11.24 7H7.5a.5.5 0 000 1h4.9a.6.6 0 00.6-.6V2.5z" fill={primaryFill} /></svg>;
}

const ArrowRedo16Regular = wrapIcon(rawSvg({}), 'ArrowRedo16Regular');
export default ArrowRedo16Regular;
      