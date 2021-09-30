import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 19.75c0 1.2-.93 2.17-2.1 2.24l-.15.01h-7.5c-1.2 0-2.17-.93-2.24-2.1L6 19.75V4.25c0-1.2.93-2.17 2.1-2.24L8.25 2h7.5c1.2 0 2.17.93 2.24 2.1l.01.15v15.5zM19 5h.75c1.2 0 2.17.93 2.24 2.1l.01.15v9.5c0 1.2-.93 2.17-2.1 2.24l-.15.01H19V5zM5 19h-.75c-1.2 0-2.17-.93-2.24-2.1L2 16.75v-9.5c0-1.2.93-2.17 2.1-2.24L4.25 5H5v14z" fill={primaryFill} /></svg>;
}

const AppRecent24Filled = wrapIcon(rawSvg({}), 'AppRecent24Filled');
export default AppRecent24Filled;
      