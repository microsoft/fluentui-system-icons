import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 3.75c0 .41-.34.75-.75.75H3.75a.75.75 0 010-1.5h16.5c.41 0 .75.34.75.75zm0 16.5c0 .41-.34.75-.75.75H3.75a.75.75 0 010-1.5h16.5c.41 0 .75.34.75.75zM7.25 8C6.01 8 5 9 5 10.25v3.5C5 14.99 6 16 7.25 16h9.5c1.24 0 2.25-1 2.25-2.25v-3.5C19 9.01 18 8 16.75 8h-9.5z" fill={primaryFill} /></svg>;
}

const CenterVertical24Filled = wrapIcon(rawSvg({}), 'CenterVertical24Filled');
export default CenterVertical24Filled;
      