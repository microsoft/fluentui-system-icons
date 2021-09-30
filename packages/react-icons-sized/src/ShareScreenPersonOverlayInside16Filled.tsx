import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5.5A2.5 2.5 0 013.5 3h9A2.5 2.5 0 0115 5.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5v-5zM4 5a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V6a1 1 0 00-1-1H4zm9 3.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v.5c0 .97.78 1.75 1.75 1.75h.5c.97 0 1.75-.78 1.75-1.75v-.5zM11 7a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const ShareScreenPersonOverlayInside16Filled = wrapIcon(rawSvg({}), 'ShareScreenPersonOverlayInside16Filled');
export default ShareScreenPersonOverlayInside16Filled;
      