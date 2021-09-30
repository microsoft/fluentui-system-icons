import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.78 2A2.23 2.23 0 0120 4.18v4.08A4.24 4.24 0 0013.51 7H8.25a.75.75 0 000 1.5h4.13c-.21.47-.34.97-.37 1.5H8.25a.75.75 0 000 1.5H12v.67a1.74 1.74 0 00-.6-.16l-.15-.01c-.7 0-1.3.4-1.58 1H8.25a.75.75 0 000 1.5H9.5c0 3 1.98 5.53 4.76 6.36l.24.07v.32c0 .27.06.52.17.75H6.25a2.29 2.29 0 01-2.24-2.03L4 19.81V4.2c0-.93.82-2.1 2.08-2.18L6.25 2h11.53zm3.47 11c.38 0 .7.28.74.65l.01.1v.75a5.64 5.64 0 01-5 5.6v1.15a.75.75 0 01-1.5.1V20.1a5.65 5.65 0 01-5-5.36v-.99a.75.75 0 011.5-.1v.85c0 2.35 1.9 4.15 4.25 4.15 2.28 0 4.13-1.7 4.24-3.94l.01-.21v-.75c0-.41.34-.75.75-.75zm-5-6c1.8 0 3.25 1.46 3.25 3.25v4a3.25 3.25 0 01-6.5 0v-4C13 8.45 14.46 7 16.25 7z" fill={primaryFill} /></svg>;
}

const Scratchpad24Filled = wrapIcon(rawSvg({}), 'Scratchpad24Filled');
export default Scratchpad24Filled;
      