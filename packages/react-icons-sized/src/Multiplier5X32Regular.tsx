import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 9.9a1 1 0 011-.9h6.25a1 1 0 110 2h-5.34l-.3 3.1 2.04-.27a4.73 4.73 0 11.62 9.42h-.53c-1.46 0-2.86-.6-3.85-1.67l-.37-.4a1 1 0 011.46-1.36l.37.4A3.26 3.26 0 0014 21.24h.53a2.73 2.73 0 10-.36-5.44l-3.28.43a1 1 0 01-1.13-1.08l.5-5.25zm10.04 6.4a1 1 0 011.42 0l1.79 1.79 1.8-1.8a1 1 0 011.4 1.42l-1.79 1.79 1.8 1.8a1 1 0 01-1.42 1.4l-1.79-1.79-1.8 1.8a1 1 0 01-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 010-1.4zM7 23a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const Multiplier5X32Regular = wrapIcon(rawSvg({}), 'Multiplier5X32Regular');
export default Multiplier5X32Regular;
      