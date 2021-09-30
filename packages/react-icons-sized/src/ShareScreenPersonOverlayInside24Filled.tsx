import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25v9.5c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 012 16.75v-9.5zM16 12a2 2 0 100-4 2 2 0 000 4zM5 8v4a1 1 0 001 1h5a1 1 0 001-1V8a1 1 0 00-1-1H6a1 1 0 00-1 1zm9 5a1 1 0 00-1 1v.25A2.75 2.75 0 0015.75 17h.5A2.75 2.75 0 0019 14.25V14a1 1 0 00-1-1h-4z" fill={primaryFill} /></svg>;
}

const ShareScreenPersonOverlayInside24Filled = wrapIcon(rawSvg({}), 'ShareScreenPersonOverlayInside24Filled');
export default ShareScreenPersonOverlayInside24Filled;
      