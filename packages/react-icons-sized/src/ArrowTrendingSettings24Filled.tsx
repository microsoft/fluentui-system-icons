import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 3a1 1 0 011 1v5a1 1 0 11-2 0V6.41l-5.8 5.8a1 1 0 01-1.4 0L10 10.4l-5.3 5.3a1 1 0 01-1.4-1.42l6-6a1 1 0 011.4 0l1.8 1.8L17.59 5H15a1 1 0 110-2h5zm-5.72 10.98a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 000 1.8l.55.13a2 2 0 011.45 2.51l-.19.64c.44.38.94.7 1.49.92l.49-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.73 5.73 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
}

const ArrowTrendingSettings24Filled = wrapIcon(rawSvg({}), 'ArrowTrendingSettings24Filled');
export default ArrowTrendingSettings24Filled;
      