import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.85 2.7l1.94-.58c1.32-.4 2.73.25 3.3 1.5l1.36 3.03a2.75 2.75 0 01-.64 3.13l-2.06 1.93c-.28.26-.07 1.29.94 3.04 1.01 1.76 1.8 2.45 2.16 2.34l2.7-.82a2.75 2.75 0 013.04 1.02l1.93 2.67c.8 1.12.66 2.66-.34 3.6l-1.5 1.42a3.75 3.75 0 01-3.67.86c-3.12-.95-6.02-3.8-8.72-8.48C5.58 12.67 4.56 8.72 5.27 5.5A3.75 3.75 0 017.85 2.7z" fill={primaryFill} /></svg>;
}

const Call28Filled = wrapIcon(rawSvg({}), 'Call28Filled');
export default Call28Filled;
      