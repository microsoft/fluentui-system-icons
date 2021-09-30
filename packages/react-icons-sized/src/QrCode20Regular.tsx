import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 15h2v2h-2v-2z" fill={primaryFill} /><path d="M15 15h2v2h-2v-2z" fill={primaryFill} /><path d="M11 11h2v2h-2v-2z" fill={primaryFill} /><path d="M13 13h2v2h-2v-2z" fill={primaryFill} /><path d="M15 11h2v2h-2v-2z" fill={primaryFill} /><path d="M3 5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1H5z" fill={primaryFill} /><path d="M5 5h2v2H5V5z" fill={primaryFill} /><path d="M3 13c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm2-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H5z" fill={primaryFill} /><path d="M5 13h2v2H5v-2z" fill={primaryFill} /><path d="M11 5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm2-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1h-2z" fill={primaryFill} /><path d="M13 5h2v2h-2V5z" fill={primaryFill} /></svg>;
}

const QrCode20Regular = wrapIcon(rawSvg({}), 'QrCode20Regular');
export default QrCode20Regular;
      