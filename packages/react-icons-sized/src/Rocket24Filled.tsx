import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.06 7.43a2.5 2.5 0 113.53 3.54 2.5 2.5 0 01-3.53-3.54zm2.47 1.06a1 1 0 10-1.41 1.42 1 1 0 001.41-1.42z" fill={primaryFill} /><path d="M19.7 2.51c.86.27 1.54.95 1.8 1.81l.21.67c.75 2.4.1 5-1.67 6.77l-1 1a3.5 3.5 0 01-.32 4.57l-1.25 1.24c-.29.3-.76.3-1.06 0l-1.59-1.59-.17.18c-.69.68-1.8.68-2.48 0l-.48-.49-.82 1.4a.75.75 0 01-1.17.14l-3.9-3.89a.75.75 0 01.15-1.17l1.39-.83-.47-.47a1.75 1.75 0 010-2.47l.18-.18-1.6-1.6a.75.75 0 010-1.05L6.7 5.3a3.5 3.5 0 014.57-.32l1-1a6.75 6.75 0 016.77-1.67l.66.2zm.38 2.26c-.13-.4-.43-.7-.83-.83l-.66-.2a5.25 5.25 0 00-5.27 1.3l-5.4 5.4c-.1.1-.1.25 0 .35l5.31 5.3c.1.1.26.1.36 0l5.4-5.39a5.25 5.25 0 001.3-5.27l-.21-.66z" fill={primaryFill} /><path d="M6.69 18.4a.75.75 0 00-1.06-1.07l-2.48 2.48a.75.75 0 001.06 1.06l2.48-2.48z" fill={primaryFill} /><path d="M4.75 15.39c.29.3.29.77 0 1.06l-1.07 1.06a.75.75 0 11-1.06-1.06l1.06-1.06c.3-.3.77-.3 1.07 0z" fill={primaryFill} /><path d="M8.63 20.34a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06z" fill={primaryFill} /></svg>;
}

const Rocket24Filled = wrapIcon(rawSvg({}), 'Rocket24Filled');
export default Rocket24Filled;
      