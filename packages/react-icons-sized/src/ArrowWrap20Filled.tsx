import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 3.5a3.25 3.25 0 010 6.5h-7.5a1.75 1.75 0 100 3.5h9.19l-.22-.22a.75.75 0 111.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 11-1.06-1.06l.22-.22H6.25a3.25 3.25 0 010-6.5h7.5a1.75 1.75 0 100-3.5h-10a.75.75 0 010-1.5h10z" fill={primaryFill} /></svg>;
}

const ArrowWrap20Filled = wrapIcon(rawSvg({}), 'ArrowWrap20Filled');
export default ArrowWrap20Filled;
      