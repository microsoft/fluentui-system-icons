import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l18.5 18.5a.75.75 0 001.06-1.06L3.28 2.22zM19.06 15l1.4-1.4c.89-.89.89-2.31 0-3.2L13.6 3.54a2.25 2.25 0 00-3.18 0L9 4.93 19.06 15zM13 16.06L7.94 11l-4.91 4.9c-.88.89-.88 2.31 0 3.2l1.88 1.87c.88.88 2.3.88 3.18 0l4.91-4.9zm-3.47-.53l-1.5 1.5a.75.75 0 11-1.06-1.06l1.5-1.5a.75.75 0 111.06 1.06z" fill={primaryFill} /></svg>;
}

const FlashlightOff24Filled = wrapIcon(rawSvg({}), 'FlashlightOff24Filled');
export default FlashlightOff24Filled;
      