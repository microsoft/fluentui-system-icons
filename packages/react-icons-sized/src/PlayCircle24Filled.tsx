import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm8.86-3.85A1.25 1.25 0 009 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 000-1.3l-5.75-3.2z" fill={primaryFill} /></svg>;
}

const PlayCircle24Filled = wrapIcon(rawSvg({}), 'PlayCircle24Filled');
export default PlayCircle24Filled;
      