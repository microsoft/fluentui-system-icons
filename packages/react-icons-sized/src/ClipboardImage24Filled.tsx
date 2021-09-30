import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 2c1.16 0 2.11.87 2.24 2h1.76c1.2 0 2.17.93 2.24 2.1l.01.15v1.5a.75.75 0 01-1.5.1v-1.6c0-.38-.28-.7-.65-.74l-.1-.01h-2.13c-.4.6-1.09 1-1.87 1h-3.5c-.78 0-1.46-.4-1.87-1H6.25c-.38 0-.7.28-.74.65l-.01.1v13.5c0 .38.28.7.65.75h1.6a.75.75 0 01.1 1.5h-1.6c-1.2 0-2.17-.92-2.24-2.1L4 19.76V6.25c0-1.2.93-2.17 2.1-2.24L6.25 4h1.76c.13-1.13 1.08-2 2.24-2h3.5zm2.69 15.51l.09.08 3.93 3.93c-.5.3-1.08.48-1.71.48h-5.5c-.63 0-1.21-.18-1.7-.48l3.92-3.93.08-.07c.23-.17.53-.2.78-.07l.1.06zM18.75 10c1.8 0 3.25 1.46 3.25 3.25v5.5c0 .63-.18 1.21-.48 1.7l-3.93-3.92-.13-.12a2.25 2.25 0 00-2.91 0l-.14.12-3.93 3.93c-.3-.5-.48-1.08-.48-1.71v-5.5c0-1.8 1.46-3.25 3.25-3.25h5.5zm-.25 2.5a1 1 0 100 2 1 1 0 000-2zm-4.75-9h-3.5a.75.75 0 100 1.5h3.5a.75.75 0 100-1.5z" fill={primaryFill} /></svg>;
}

const ClipboardImage24Filled = wrapIcon(rawSvg({}), 'ClipboardImage24Filled');
export default ClipboardImage24Filled;
      