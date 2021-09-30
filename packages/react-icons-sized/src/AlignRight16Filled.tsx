import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 1.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zm-3.75.5c.97 0 1.75.78 1.75 1.75v1.5C12 6.22 11.22 7 10.25 7h-6.5C2.78 7 2 6.22 2 5.25v-1.5C2 2.78 2.78 2 3.75 2h6.5zm0 7c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-4.5C4.78 14 4 13.22 4 12.25v-1.5C4 9.78 4.78 9 5.75 9h4.5z" fill={primaryFill} /></svg>;
}

const AlignRight16Filled = wrapIcon(rawSvg({}), 'AlignRight16Filled');
export default AlignRight16Filled;
      