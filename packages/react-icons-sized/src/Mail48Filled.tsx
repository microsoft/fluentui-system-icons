import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M43 16.98v16.77c0 2.9-2.35 5.25-5.25 5.25h-27.5A5.25 5.25 0 015 33.75V16.98L23.4 27.1c.37.2.83.2 1.2 0L43 16.98zM37.75 9A5.25 5.25 0 0143 14.12L24 24.57 5 14.12v-.09A5.25 5.25 0 0110.25 9h27.5z" fill={primaryFill} /></svg>;
}

const Mail48Filled = wrapIcon(rawSvg({}), 'Mail48Filled');
export default Mail48Filled;
      