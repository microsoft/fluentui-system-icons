import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 8v11.5a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 19.5V8h16zm-6 3.5h-4a.75.75 0 000 1.5h4a.75.75 0 000-1.5zM20 3a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16z" fill={primaryFill} /></svg>;
}

const Archive24Filled = wrapIcon(rawSvg({}), 'Archive24Filled');
export default Archive24Filled;
      