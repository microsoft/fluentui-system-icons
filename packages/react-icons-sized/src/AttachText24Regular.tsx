import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 3.5c2.28 0 4.14 1.8 4.25 4.04V18.5a2.5 2.5 0 01-5 .16V9A.75.75 0 018 8.9v9.6a1 1 0 002 .12V7.75a2.75 2.75 0 00-5.5-.17V17a.75.75 0 01-1.5.1V7.75C3 5.4 4.9 3.5 7.25 3.5zm9 12.5a.75.75 0 01.1 1.5h-2.6a.75.75 0 01-.1-1.5h2.6zm4-3a.75.75 0 01.1 1.5h-6.6a.75.75 0 01-.1-1.5h6.6zm0-3a.75.75 0 01.1 1.5h-6.6a.75.75 0 01-.1-1.5h6.6zm0-3a.75.75 0 01.1 1.5h-6.6a.75.75 0 01-.1-1.5h6.6z" fill={primaryFill} /></svg>;
}

const AttachText24Regular = wrapIcon(rawSvg({}), 'AttachText24Regular');
export default AttachText24Regular;
      