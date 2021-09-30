import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 4c1.2 0 2.17.93 2.24 2.1l.01.15V17.5a.5.5 0 001 .09V7.01c1.07.12 1.92 1 2 2.08v7.66a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 16.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h12.5zm-7.5 7h-3.5a.75.75 0 00-.75.75v3.5c0 .41.33.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75zm6 3.5h-2.6a.75.75 0 00.1 1.5h2.6a.75.75 0 00-.1-1.5zm-6.75-2v2h-2v-2h2zm6.75-1.5h-2.5l-.1.01a.75.75 0 00.1 1.5l2.5-.01h.1a.75.75 0 00-.1-1.5zm0-3.5h-9.5l-.1.01a.75.75 0 00.1 1.5h9.5l.1-.01a.75.75 0 00-.1-1.5z" fill={primaryFill} /></svg>;
}

const News24Filled = wrapIcon(rawSvg({}), 'News24Filled');
export default News24Filled;
      