import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 4.5c1.24 0 2.25 1 2.25 2.25V14h-6.75A2.75 2.75 0 0014 16.75v6.75H6.75c-1.24 0-2.25-1-2.25-2.25v-5a.75.75 0 00-1.5 0v5A3.75 3.75 0 006.75 25h14.5A3.75 3.75 0 0025 21.25V6.75A3.75 3.75 0 0021.25 3h-5a.75.75 0 000 1.5h5zm-8.75-.75a.75.75 0 00-.75-.75h-8a.75.75 0 00-.75.75v8a.75.75 0 001.5 0V5.56l6.22 6.22a.75.75 0 101.06-1.06L5.56 4.5h6.19c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft28Filled = wrapIcon(rawSvg({}), 'ExpandUpLeft28Filled');
export default ExpandUpLeft28Filled;
      