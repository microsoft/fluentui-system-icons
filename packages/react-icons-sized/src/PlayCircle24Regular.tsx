import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.86 8.15A1.25 1.25 0 009 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 000-1.3l-5.75-3.2zM12 2a10 10 0 100 20 10 10 0 000-20zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" fill={primaryFill} /></svg>;
}

const PlayCircle24Regular = wrapIcon(rawSvg({}), 'PlayCircle24Regular');
export default PlayCircle24Regular;
      