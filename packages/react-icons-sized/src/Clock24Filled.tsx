import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 13.5h-4a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0V12h3.25a.75.75 0 010 1.5zM12 2a10 10 0 100 20 10 10 0 000-20z" fill={primaryFill} /></svg>;
}

const Clock24Filled = wrapIcon(rawSvg({}), 'Clock24Filled');
export default Clock24Filled;
      