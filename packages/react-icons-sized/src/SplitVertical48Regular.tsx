import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.5 5.25a1.25 1.25 0 10-2.5 0v37.5a1.25 1.25 0 102.5 0V5.25zM39.75 37.5H27.5V40h12.25C42.1 40 44 38.1 44 35.75v-23.5C44 9.9 42.1 8 39.75 8H27.5v2.5h12.25c.97 0 1.75.78 1.75 1.75v23.5c0 .97-.78 1.75-1.75 1.75zM21 8H8.25A4.25 4.25 0 004 12.25v23.5C4 38.1 5.9 40 8.25 40H21v-2.5H8.25c-.97 0-1.75-.78-1.75-1.75v-23.5c0-.97.78-1.75 1.75-1.75H21V8z" fill={primaryFill} /></svg>;
}

const SplitVertical48Regular = wrapIcon(rawSvg({}), 'SplitVertical48Regular');
export default SplitVertical48Regular;
      