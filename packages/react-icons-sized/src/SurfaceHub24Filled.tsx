import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 2c.41 0 .74.33.75.73v.1l-1 9.5a.75.75 0 01-.65.66l-.1.01h-.73L19 21.12v.1a.75.75 0 01-1.45.26l-.03-.1L16.9 18h-2.8l-.6 3.38a.75.75 0 01-1.5-.16l.02-.1.56-3.12H8.1l-.6 3.38a.75.75 0 01-1.5-.16l.02-.1L7.48 13H4.75a.75.75 0 01-.75-.73v-.1l1-9.5c.04-.35.31-.62.65-.66l.1-.01h13.5zm-5.77 11H9l-.63 3.5h4.48l.63-3.5zM16 13h-1l-.63 3.5h2.26L16 13z" fill={primaryFill} /></svg>;
}

const SurfaceHub24Filled = wrapIcon(rawSvg({}), 'SurfaceHub24Filled');
export default SurfaceHub24Filled;
      