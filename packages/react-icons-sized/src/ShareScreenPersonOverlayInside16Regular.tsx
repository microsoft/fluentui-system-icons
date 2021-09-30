import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5a1 1 0 00-1 1v2a1 1 0 001 1h3a1 1 0 001-1V6a1 1 0 00-1-1H4zm9 3.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v.5c0 .97.78 1.75 1.75 1.75h.5c.97 0 1.75-.78 1.75-1.75v-.5zM11 7a1 1 0 100-2 1 1 0 000 2zM3.5 3A2.5 2.5 0 001 5.5v5A2.5 2.5 0 003.5 13h9a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0012.5 3h-9zM2 5.5C2 4.67 2.67 4 3.5 4h9c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 012 10.5v-5z" fill={primaryFill} /></svg>;
}

const ShareScreenPersonOverlayInside16Regular = wrapIcon(rawSvg({}), 'ShareScreenPersonOverlayInside16Regular');
export default ShareScreenPersonOverlayInside16Regular;
      