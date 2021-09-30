import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 15a.5.5 0 01-.5-.5V14H6.75C5.78 14 5 13.22 5 12.25v-1.5C5 9.78 5.78 9 6.75 9H8V7H5.75C4.78 7 4 6.22 4 5.25v-1.5C4 2.78 4.78 2 5.75 2H8v-.5a.5.5 0 011 0V2h2.25c.97 0 1.75.78 1.75 1.75v1.5C13 6.22 12.22 7 11.25 7H9v2h1.25c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75H9v.5a.5.5 0 01-.5.5z" fill={primaryFill} /></svg>;
}

const AlignCenterVertical16Filled = wrapIcon(rawSvg({}), 'AlignCenterVertical16Filled');
export default AlignCenterVertical16Filled;
      