import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.5 5.25a1.25 1.25 0 10-2.5 0v37.5a1.25 1.25 0 102.5 0V5.25zM39.75 40H27.5V8h12.25C42.1 8 44 9.9 44 12.25v23.5C44 38.1 42.1 40 39.75 40zM21 8H8.25A4.25 4.25 0 004 12.25v23.5C4 38.1 5.9 40 8.25 40H21V8z" fill={primaryFill} /></svg>;
}

const SplitVertical48Filled = wrapIcon(rawSvg({}), 'SplitVertical48Filled');
export default SplitVertical48Filled;
      