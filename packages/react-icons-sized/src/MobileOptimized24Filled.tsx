import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 18.5h2a.75.75 0 01.1 1.5H20v1.25a.75.75 0 01-1.5.1v-2.1c0-.38.28-.7.65-.74l.1-.01h2-2zm-16.5 0h2c.38 0 .7.28.74.65l.01.1v2a.75.75 0 01-1.5.1V20H2.75a.75.75 0 01-.1-1.5h2.1-2zm14-13c.41 0 .75.34.75.75v11.5c0 .41-.34.75-.75.75h-9.5a.75.75 0 01-.75-.75V6.25c0-.41.34-.75.75-.75h9.5zm-4.5 7.01h-2.5l-.1.01a.75.75 0 000 1.49h2.7a.75.75 0 00-.1-1.5zm2-3.01h-4.6a.75.75 0 000 1.5H14.35a.75.75 0 00-.1-1.5zM4.75 2c.38 0 .7.28.74.65l.01.1v2c0 .38-.28.7-.65.74l-.1.01h-2a.75.75 0 01-.1-1.5H4V2.75c0-.41.34-.75.75-.75zm14.5 0c.38 0 .7.28.74.65l.01.1V4h1.25a.75.75 0 01.1 1.5h-2.1a.75.75 0 01-.74-.65l-.01-.1v-2c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const MobileOptimized24Filled = wrapIcon(rawSvg({}), 'MobileOptimized24Filled');
export default MobileOptimized24Filled;
      