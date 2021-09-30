import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.9 16.5H12v.5c0 1.73.6 3.07 1.38 4.09-.44.58-.9.9-1.38.9-1.2 0-2.4-2.08-3.04-5.2l-.06-.29zM8.67 15H12v-1.5c0-.85.68-1.45 1.4-1.52a5.7 5.7 0 002.1-.64c-.02-.46-.04-.9-.08-1.34H8.58l-.04.49A25.98 25.98 0 008.67 15zm13.13-5c.13.61.2 1.24.2 1.9a7.08 7.08 0 01-2.96-1.55c-.21-.18-.46-.3-.71-.35h3.47zM3.07 16.5h4.3c.37 2.08.98 3.85 1.8 5.1a10.03 10.03 0 01-5.96-4.82l-.14-.28zM2.2 10h4.87a28.2 28.2 0 00.03 4.42l.06.58h-4.7a10 10 0 01-.26-5zm12.74-7.42l-.1-.17c3.01.89 5.44 3.16 6.53 6.09h-4.59c-.31-2.42-.96-4.5-1.84-5.92zm-5.9-.14l.12-.03a14.57 14.57 0 00-1.88 5.65l-.06.44h-4.6a10.03 10.03 0 016.42-6.06zM12 2c1.32 0 2.65 2.54 3.21 6.19l.05.31H8.74C9.28 4.7 10.64 2 12 2zm10.5 10.98a7.7 7.7 0 01-4.12-1.87.6.6 0 00-.77 0c-.68.58-2.2 1.7-4.11 1.87a.54.54 0 00-.5.52V17c0 4.22 4.1 5.72 4.87 5.96.09.03.17.03.26 0C18.9 22.72 23 21.22 23 17v-3.5c0-.28-.23-.5-.5-.52z" fill={primaryFill} /></svg>;
}

const GlobeShield24Filled = wrapIcon(rawSvg({}), 'GlobeShield24Filled');
export default GlobeShield24Filled;
      