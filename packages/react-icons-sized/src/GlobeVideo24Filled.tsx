import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.9 16.5H11v5.02c-.83-.78-1.58-2.5-2.04-4.73l-.05-.29zM8.68 15h2.38a2.5 2.5 0 012.45-2h1.98a26.1 26.1 0 00-.06-3H8.58l-.04.49A25.99 25.99 0 008.67 15zm13-1.31l.2-.12A10.08 10.08 0 0021.8 10h-4.87l.04.66a28.55 28.55 0 01.01 2.34h1.52c.96 0 1.79.54 2.2 1.33l.97-.64zM3.07 16.5h4.3c.37 2.08.99 3.85 1.8 5.1a10.03 10.03 0 01-5.96-4.82l-.14-.28zM2.2 10h4.87a28.21 28.21 0 00.03 4.42l.06.58h-4.7a10 10 0 01-.26-5zm12.74-7.42l-.1-.18c3.01.9 5.44 3.17 6.53 6.1h-4.59c-.31-2.42-.96-4.5-1.84-5.92zm-5.9-.14l.12-.04a14.57 14.57 0 00-1.88 5.66l-.06.44H2.63a10.03 10.03 0 016.41-6.06zM12 2c1.32 0 2.65 2.54 3.21 6.18l.05.32H8.74C9.28 4.69 10.64 2 12 2zm0 13.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v.5l2.22-1.48a.5.5 0 01.78.41v7.14a.5.5 0 01-.78.41L20 21v.5c0 .83-.67 1.5-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-6z" fill={primaryFill} /></svg>;
}

const GlobeVideo24Filled = wrapIcon(rawSvg({}), 'GlobeVideo24Filled');
export default GlobeVideo24Filled;
      