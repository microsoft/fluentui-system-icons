import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.5a.5.5 0 00-.5.5v1.61a.75.75 0 01-1.5 0V4c0-1.1.9-2 2-2h1.61a.75.75 0 010 1.5H4zm5.64-.75c0-.41.33-.75.75-.75H12a2 2 0 012 2v1.61a.75.75 0 01-1.5 0V4a.5.5 0 00-.5-.5h-1.61a.75.75 0 01-.75-.75zM2.75 9.64c.41 0 .75.33.75.75V12c0 .28.22.5.5.5h1.61a.75.75 0 010 1.5H4a2 2 0 01-2-2v-1.61c0-.42.34-.75.75-.75zm10.5 0c.41 0 .75.33.75.75V12a2 2 0 01-2 2h-1.61a.75.75 0 110-1.5H12a.5.5 0 00.5-.5v-1.61c0-.42.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const FullScreenMaximize16Filled = wrapIcon(rawSvg({}), 'FullScreenMaximize16Filled');
export default FullScreenMaximize16Filled;
      