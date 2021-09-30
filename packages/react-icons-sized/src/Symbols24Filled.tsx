import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.92 18a.75.75 0 01.1 1.5H15.88a3 3 0 004.7-.3.75.75 0 111.24.87 4.5 4.5 0 01-6.65.83v.35a.75.75 0 01-1.5.1v-2.6c0-.38.28-.7.65-.74l.1-.01h2.5zM6.4 13h.1c.38 0 .7.28.74.65l.01.1v3h3c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-3v3c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-3h-3a.75.75 0 01-.74-.65L2 17.5c0-.38.28-.7.65-.74l.1-.01h3v-3c0-.38.28-.7.65-.74l.1-.01h-.1zm11.1 0c1.11 0 2.15.4 2.95 1.1v-.35a.75.75 0 011.5-.1v2.6c0 .38-.28.7-.65.74l-.1.01h-2.5a.75.75 0 01-.1-1.5H19.74a3 3 0 00-4.7.29.75.75 0 11-1.24-.86A4.5 4.5 0 0117.5 13zM6.5 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm12.71 0C20.77 2 22 3.39 22 5.08a3.2 3.2 0 01-.85 2.21l-2.5 3.14a1.49 1.49 0 01-2.35 0l-2.67-3.4A3.27 3.27 0 0113 5.08C13 3.39 14.23 2 15.79 2c.56 0 1.1.19 1.55.52l.16.13.16-.13A2.6 2.6 0 0119.21 2zM3.91 4.98a3 3 0 004.1 4.1l-4.1-4.1zM6.5 3.5c-.56 0-1.08.15-1.52.41l4.1 4.11A3 3 0 006.5 3.5z" fill={primaryFill} /></svg>;
}

const Symbols24Filled = wrapIcon(rawSvg({}), 'Symbols24Filled');
export default Symbols24Filled;
      