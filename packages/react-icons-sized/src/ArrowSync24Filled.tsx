import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.05 5.03a1 1 0 00.2 1.4 6.99 6.99 0 01-3.17 12.49l.71-.71a1 1 0 00-1.41-1.42l-2.5 2.5a1 1 0 000 1.42l2.5 2.5a1 1 0 001.41-1.42l-.84-.84a9 9 0 004.5-16.11 1 1 0 00-1.4.19zm-1.93-1.74L11.62.8a1 1 0 00-1.5 1.32l.09.1.84.84a9 9 0 00-4.78 15.9 1 1 0 001.28-1.55 6.98 6.98 0 013.37-12.32l-.71.71a1 1 0 001.32 1.5l.1-.08 2.5-2.5a1 1 0 00.07-1.32l-.08-.1z" fill={primaryFill} /></svg>;
}

const ArrowSync24Filled = wrapIcon(rawSvg({}), 'ArrowSync24Filled');
export default ArrowSync24Filled;
      