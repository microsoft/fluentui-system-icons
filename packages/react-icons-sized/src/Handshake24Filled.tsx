import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.83 3.16c.06-.04.11-.1.15-.15h2.6a5.37 5.37 0 01.54 0h.04a3.82 3.82 0 011.65.37 5.22 5.22 0 013.14 6.17l-3.28-3.24a.75.75 0 00-.53-.21H12.4a.76.76 0 00-.45.15l-1.89 1.43a.97.97 0 01-1.46-.35c-.2-.4-.08-.9.29-1.18l3.94-2.99z" fill={primaryFill} /><path d="M7.9 14.24h-.01l-.98.98H6.9a.9.9 0 01-1.26 0 .9.9 0 010-1.27l.97-.97a.9.9 0 011.28 0c.34.35.35.9 0 1.26z" fill={primaryFill} /><path d="M7.6 15.93a.9.9 0 00.02 1.26.9.9 0 001.28 0l.97-.97a.9.9 0 00-.14-1.38.9.9 0 00-1.12.1l-.01.01-.98.97-.01.01z" fill={primaryFill} /><path d="M5.5 11.4a.9.9 0 010 1.27l-.97.97a.9.9 0 01-1.28 0 .9.9 0 010-1.26l.98-.97a.9.9 0 011.27 0z" fill={primaryFill} /><path d="M11.85 16.93a.9.9 0 010 1.26l-.97.97a.9.9 0 01-1.45-1.03.9.9 0 01.18-.24l.97-.96a.9.9 0 011.27 0z" fill={primaryFill} /><path d="M5.34 4.83a6.18 6.18 0 015.12-1.75L7.98 4.96A2.45 2.45 0 007.5 8.4a2.47 2.47 0 003.46.46l1.68-1.27h4.19l3.5 3.46.04.04 1.15 1.15a1.44 1.44 0 01-1.94 2.12l-.1-.1a.5.5 0 00-.05-.04l-1.1-1.1a.5.5 0 10-.7.71l1.15 1.15.13.12.04.04a1.02 1.02 0 01-1.44 1.44l-.17-.16a.5.5 0 00-.85.36c0 .13.04.26.14.36l.22.23a.94.94 0 11-1.33 1.33l-.01-.01-.21-.21a.5.5 0 10-.7.7l.21.22a.96.96 0 01-1.35 1.37l-1.43-1.36.52-.52c.75-.74.75-1.94 0-2.68a1.9 1.9 0 00-1.42-.55 1.9 1.9 0 00-1.98-1.97 1.91 1.91 0 00-2.4-1.9 1.91 1.91 0 00-3.05-1.24 6.1 6.1 0 011.63-5.73z" fill={primaryFill} /></svg>;
}

const Handshake24Filled = wrapIcon(rawSvg({}), 'Handshake24Filled');
export default Handshake24Filled;
      