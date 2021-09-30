import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.95 2.07A4.15 4.15 0 002.14 7.2a1.45 1.45 0 012.35.72 1.45 1.45 0 011.65 1.33 1.44 1.44 0 011.33 1.33 1.44 1.44 0 01.92 2.46l-.23.23.69.66c.2.18.5.17.68-.01a.5.5 0 00.05-.64l-.04-.04a.5.5 0 01-.05-.05l-.1-.1a.5.5 0 010-.71c.2-.2.5-.2.7 0l.14.14.09.09.07.07c.19.19.49.19.67 0a.48.48 0 000-.67l-.15-.15a.5.5 0 01-.14-.37.5.5 0 01.85-.35l.11.11c.2.2.54.2.74 0 .21-.2.21-.54 0-.74l-.02-.03a1.8 1.8 0 01-.1-.08l-.77-.78a.5.5 0 010-.71c.2-.2.51-.2.7 0l.74.73a.5.5 0 01.05.04l.06.06a.8.8 0 001.08-.05.81.81 0 000-1.15l-.74-.74a.47.47 0 01-.03-.03l-3-3.04h-.76l-1.71 1.3a1.89 1.89 0 01-2.28-3l1.26-.96z" fill={primaryFill} /><path d="M10.66 3.73a.5.5 0 01.35.15l2.7 2.74a3.15 3.15 0 00-1.55-4.31 2.18 2.18 0 00-1.06-.28H8.65a.5.5 0 01-.05.05L6.3 3.83a.89.89 0 001.07 1.4l1.84-1.4a.5.5 0 01.3-.1h1.15z" fill={primaryFill} /><path d="M6.35 11l-.66.65a.45.45 0 01-.63 0 .44.44 0 01-.01-.61l.01-.01.66-.66v-.01a.45.45 0 01.63.01c.17.17.17.46 0 .63z" fill={primaryFill} /><path d="M6.4 12.99a.45.45 0 00.63 0l.65-.66a.44.44 0 00-.07-.68.45.45 0 00-.55.05l-.66.66a.44.44 0 000 .63z" fill={primaryFill} /><path d="M3.41 8.6l-.65.65a.45.45 0 01-.63 0 .44.44 0 01-.02-.62l.02-.01.65-.66.02-.01a.45.45 0 01.61.01c.18.18.18.46 0 .63z" fill={primaryFill} /><path d="M4.89 9.7l-.66.66a.45.45 0 01-.63 0 .44.44 0 010-.62v-.01l.66-.65.01-.02a.45.45 0 01.62.02c.17.17.17.45 0 .62z" fill={primaryFill} /></svg>;
}

const Handshake16Filled = wrapIcon(rawSvg({}), 'Handshake16Filled');
export default Handshake16Filled;
      