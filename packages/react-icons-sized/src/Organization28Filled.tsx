import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.75 6.25a4.25 4.25 0 115 4.18v3.07h4.5c1.24 0 2.25 1 2.25 2.25v1.82a4.25 4.25 0 11-1.5 0v-1.82a.75.75 0 00-.75-.75H8.75a.75.75 0 00-.75.75v1.82a4.25 4.25 0 11-1.5 0v-1.82c0-1.24 1-2.25 2.25-2.25h4.5v-3.07a4.25 4.25 0 01-3.5-4.18z" fill={primaryFill} /></svg>;
}

const Organization28Filled = wrapIcon(rawSvg({}), 'Organization28Filled');
export default Organization28Filled;
      