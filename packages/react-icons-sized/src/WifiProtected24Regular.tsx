import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2c-.92 0-1.67.7-1.74 1.6l-.01.15v.78a1 1 0 00-.74.85L4 17.5V20a1 1 0 00.88 1H8a1 1 0 001-.89V17.5a1 1 0 00-.64-.94l-.1-.03-.01-.78c0-.97-.78-1.75-1.75-1.75zm0 1c.38 0 .7.28.74.65l.01.1v.75h-1.5v-.75c0-.42.34-.75.75-.75zm9.14-1.18c.45.45.82 1 1.08 1.58a.75.75 0 11-1.38.6 3.58 3.58 0 00-3.47-2.17c-.34-.49-.74-.93-1.2-1.31a5.09 5.09 0 014.97 1.3zm2.1-3.07c.6.6 1.1 1.3 1.5 2.07a.75.75 0 11-1.34.68 6.56 6.56 0 00-9.8-2.3 6.54 6.54 0 00-2-.19l.24-.26a8.06 8.06 0 0111.4 0zm2.7-2.47c.52.5 1 1.09 1.42 1.7a.75.75 0 11-1.24.85 10.45 10.45 0 00-17.23 0 .75.75 0 01-1.23-.86 11.95 11.95 0 0118.29-1.69z" fill={primaryFill} /></svg>;
}

const WifiProtected24Regular = wrapIcon(rawSvg({}), 'WifiProtected24Regular');
export default WifiProtected24Regular;
      