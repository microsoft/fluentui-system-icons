import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.9 16.5h6.2c-.62 3.27-1.87 5.5-3.1 5.5-1.2 0-2.4-2.1-3.04-5.2l-.06-.3h6.2-6.2zm-5.83 0h4.3c.37 2.08.98 3.85 1.8 5.1a10.03 10.03 0 01-5.96-4.82l-.14-.28zm13.56 0h4.3a10.03 10.03 0 01-6.1 5.1 13.47 13.47 0 001.72-4.69l.08-.4h4.3-4.3zm.3-6.5h4.87a10.05 10.05 0 01-.26 5h-4.7a27.53 27.53 0 00.13-4.34l-.04-.66h4.87-4.87zM2.2 10h4.87a28.21 28.21 0 00.03 4.42l.06.58h-4.7a10 10 0 01-.26-5zm6.38 0h6.84a25.84 25.84 0 01-.03 4.43l-.06.57H8.67a25.36 25.36 0 01-.13-4.51l.04-.49h6.84-6.84zm6.36-7.42l-.1-.17c3.01.89 5.44 3.16 6.53 6.09h-4.59c-.31-2.42-.96-4.5-1.84-5.92l-.1-.17.1.17zm-5.9-.14l.12-.03a14.57 14.57 0 00-1.88 5.65l-.06.44h-4.6a10.03 10.03 0 016.42-6.06l.12-.03-.12.03zM12 2c1.32 0 2.65 2.54 3.21 6.19l.05.31H8.74C9.28 4.7 10.64 2 12 2z" fill={primaryFill} /></svg>;
}

const Globe24Filled = wrapIcon(rawSvg({}), 'Globe24Filled');
export default Globe24Filled;
      