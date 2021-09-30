import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.28 4.53a.75.75 0 00-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 001.06-1.06l-.72-.72h2.69a.75.75 0 100-1.5h-2.7l.73-.72z" fill={primaryFill} /><path d="M6 0a6 6 0 100 12A6 6 0 006 0zM1.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" fill={primaryFill} /></svg>;
}

const PresenceOof12Regular = wrapIcon(rawSvg({}), 'PresenceOof12Regular');
export default PresenceOof12Regular;
      