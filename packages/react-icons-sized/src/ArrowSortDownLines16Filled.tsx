import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.03 11.03l-2.75 2.75c-.3.3-.77.3-1.06 0l-2.75-2.75a.75.75 0 111.06-1.06L5 11.44V2.75a.75.75 0 011.5 0v8.69l1.47-1.47a.75.75 0 011.06 1.06zM8.5 2a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5zm0 2.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zm0 2.5a.75.75 0 000 1.5h1a.75.75 0 000-1.5h-1z" fill={primaryFill} /></svg>;
}

const ArrowSortDownLines16Filled = wrapIcon(rawSvg({}), 'ArrowSortDownLines16Filled');
export default ArrowSortDownLines16Filled;
      