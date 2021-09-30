import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.69 1a.75.75 0 00-.72.54L1.1 8.04c-.14.48.22.96.72.96h1.53l-1.34 5.38a.5.5 0 00.84.46l2.43-2.57A5.5 5.5 0 0110.42 5h-2.2l1.12-2.99A.75.75 0 008.64 1H3.69zm6.81 14a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-5.65l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 11.7-.7l.65.64 2.65-2.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const FlashCheckmark16Filled = wrapIcon(rawSvg({}), 'FlashCheckmark16Filled');
export default FlashCheckmark16Filled;
      