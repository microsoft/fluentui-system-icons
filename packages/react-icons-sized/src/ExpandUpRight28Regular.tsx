import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6.75c0-1.24 1-2.25 2.25-2.25h5a.75.75 0 000-1.5h-5A3.75 3.75 0 003 6.75v14.5A3.75 3.75 0 006.75 25h14.5A3.75 3.75 0 0025 21.25v-5a.75.75 0 00-1.5 0v5c0 1.24-1 2.25-2.25 2.25H14v-6.75A2.75 2.75 0 0011.25 14H4.5V6.75zm0 8.75h6.75c.69 0 1.25.56 1.25 1.25v6.75H6.75c-1.24 0-2.25-1-2.25-2.25V15.5zm11-11.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v8a.75.75 0 11-1.5 0V5.56l-6.22 6.22a.75.75 0 11-1.06-1.06l6.22-6.22h-6.19a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const ExpandUpRight28Regular = wrapIcon(rawSvg({}), 'ExpandUpRight28Regular');
export default ExpandUpRight28Regular;
      