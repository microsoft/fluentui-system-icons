import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.8 2.24a.75.75 0 00-1.1 0l-4 4.25A.75.75 0 104.8 7.5l2.7-2.87v10.11c0 1.8 1.46 3.25 3.25 3.25h4.5a.75.75 0 000-1.5h-4.5c-.97 0-1.75-.78-1.75-1.75V4.65l2.7 2.86a.75.75 0 101.1-1.02l-4-4.25z" fill={primaryFill} /></svg>;
}

const ArrowEnterUp20Filled = wrapIcon(rawSvg({}), 'ArrowEnterUp20Filled');
export default ArrowEnterUp20Filled;
      