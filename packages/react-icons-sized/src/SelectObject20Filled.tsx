import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M17 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M6 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M17 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M7 4.75c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 017 4.75z" fill={primaryFill} /><path d="M7 15.25c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M4 7.75a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5z" fill={primaryFill} /><path d="M14.5 7.75a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5z" fill={primaryFill} /></svg>;
}

const SelectObject20Filled = wrapIcon(rawSvg({}), 'SelectObject20Filled');
export default SelectObject20Filled;
      