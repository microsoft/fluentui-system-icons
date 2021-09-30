import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25C2 3.45 3.46 2 5.25 2h5.5C12.55 2 14 3.46 14 5.25v2a.75.75 0 01-1.5 0v-2c0-.97-.78-1.75-1.75-1.75h-5.5c-.97 0-1.75.78-1.75 1.75v5.5c0 .97.78 1.75 1.75 1.75h3a.75.75 0 010 1.5h-3A3.25 3.25 0 012 10.75v-5.5z" fill={primaryFill} /><path d="M6 6.75c0-.41.34-.75.75-.75h3.5a.75.75 0 010 1.5H8.56l4.22 4.22a.75.75 0 11-1.06 1.06L7.5 8.56v1.69a.75.75 0 01-1.5 0v-3.5z" fill={primaryFill} /></svg>;
}

const OpenFolder16Filled = wrapIcon(rawSvg({}), 'OpenFolder16Filled');
export default OpenFolder16Filled;
      