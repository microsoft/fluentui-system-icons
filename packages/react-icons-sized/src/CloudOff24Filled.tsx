import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.57 4.57a5.7 5.7 0 00-.7 1.9H6a4 4 0 000 8h10.69l4.03 4.03a.75.75 0 001.06-1.06L3.28 2.22zM21.5 13.75a4 4 0 01-1.47 3.1L8.93 5.75a5.75 5.75 0 018.49 4h.08a4 4 0 014 4z" fill={primaryFill} /></svg>;
}

const CloudOff24Filled = wrapIcon(rawSvg({}), 'CloudOff24Filled');
export default CloudOff24Filled;
      