import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.11 8.8c.34-.3.75-.53 1.2-.66l.24-.07.16-.03.18-.02.18-.02h7.68a3.25 3.25 0 013.24 3.06l.01.19v7.5a3.25 3.25 0 01-3.07 3.24h-7.68a3.25 3.25 0 01-3.24-3.06L8 18.75V11.1l.02-.19.02-.2.04-.18.06-.22.08-.24.08-.2.09-.16.1-.16.14-.22.1-.12.13-.16.1-.11.15-.14zM15 11c-.38 0-.7.28-.74.65l-.01.1v2.5h-2.5c-.38 0-.7.28-.74.65L11 15c0 .38.28.7.65.74h2.6v2.51c0 .38.28.7.65.74l.1.01c.38 0 .7-.28.74-.65l.01-.1v-2.5h2.5c.38 0 .7-.28.74-.65L19 15c0-.38-.28-.7-.65-.74l-.1-.01h-2.5v-2.5c0-.38-.28-.7-.65-.74L15 11zm.58-6.77l.05.18.7 2.59h-5.08A4.25 4.25 0 007 11.25v6.43a3.25 3.25 0 01-2.9-2.23l-.05-.17-1.94-7.25c-.45-1.67.5-3.39 2.12-3.92l.18-.06 7.24-1.94c1.68-.45 3.4.5 3.93 2.12z" fill={primaryFill} /></svg>;
}

const Collections24Filled = wrapIcon(rawSvg({}), 'Collections24Filled');
export default Collections24Filled;
      