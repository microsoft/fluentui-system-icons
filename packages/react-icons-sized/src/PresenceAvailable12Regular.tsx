import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 0a6 6 0 100 12A6 6 0 006 0zM1.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" fill={primaryFill} /><path d="M8.53 4.22c.3.3.3.77 0 1.06L5.78 8.03c-.3.3-.77.3-1.06 0l-1-1a.75.75 0 011.06-1.06l.47.47 2.22-2.22c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const PresenceAvailable12Regular = wrapIcon(rawSvg({}), 'PresenceAvailable12Regular');
export default PresenceAvailable12Regular;
      