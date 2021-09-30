import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8.25a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zm4.5 0a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zM12 2a10 10 0 100 20 10 10 0 000-20zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" fill={primaryFill} /></svg>;
}

const PauseCircle24Regular = wrapIcon(rawSvg({}), 'PauseCircle24Regular');
export default PauseCircle24Regular;
      