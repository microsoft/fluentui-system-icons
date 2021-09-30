import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.28 2.98a1.73 1.73 0 113.44 0l-.58 4.03a1.15 1.15 0 01-2.28 0l-.58-4.03z" fill={primaryFill} /><path d="M7 10a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const Important12Filled = wrapIcon(rawSvg({}), 'Important12Filled');
export default Important12Filled;
      