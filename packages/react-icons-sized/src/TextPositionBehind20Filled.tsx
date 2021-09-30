import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M7.75 8.5a2.25 2.25 0 014.5 0v5a.75.75 0 001.5 0v-5a3.75 3.75 0 10-7.5 0v5a.75.75 0 001.5 0v-5z" fill={primaryFill} /><path d="M16.5 10.25h-1.75v-1.5h1.75a.75.75 0 010 1.5z" fill={primaryFill} /><path d="M3.5 8.75h1.75v1.5H3.5a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M3.5 14.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" fill={primaryFill} /><path d="M8.75 8.75h2.5v1.5h-2.5v-1.5z" fill={primaryFill} /></svg>;
}

const TextPositionBehind20Filled = wrapIcon(rawSvg({}), 'TextPositionBehind20Filled');
export default TextPositionBehind20Filled;
      