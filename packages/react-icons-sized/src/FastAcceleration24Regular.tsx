import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 4a8.5 8.5 0 11-4.82 15.5H1.75a.75.75 0 01-.1-1.5H7.02c-.4-.46-.73-.96-1.02-1.5H3.75a.75.75 0 01-.1-1.5H5.37a8.5 8.5 0 011.65-8H2.75a.75.75 0 01-.1-1.5H8.68A8.46 8.46 0 0113.5 4zm0 1.5a7 7 0 100 14 7 7 0 000-14zm0 1.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm1.15 7.72a2.49 2.49 0 01-2.3 0l-1.09 1.1a3.98 3.98 0 004.5 0l-1.1-1.1zM9.5 12.5c0 .84.26 1.62.7 2.26l1.09-1.1a2.49 2.49 0 010-2.32l-1.1-1.09c-.43.65-.69 1.42-.69 2.25zm7.32-2.24l-1.1 1.1a2.49 2.49 0 010 2.3l1.1 1.1a3.98 3.98 0 000-4.5zM13.5 11.5a1 1 0 100 2 1 1 0 000-2zm0-3c-.83 0-1.6.26-2.25.7l1.1 1.08a2.49 2.49 0 012.32 0l1.09-1.08a3.98 3.98 0 00-2.26-.7z" fill={primaryFill} /></svg>;
}

const FastAcceleration24Regular = wrapIcon(rawSvg({}), 'FastAcceleration24Regular');
export default FastAcceleration24Regular;
      