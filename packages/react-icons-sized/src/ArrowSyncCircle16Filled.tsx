import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 100 12A6 6 0 008 2zM5.5 8h1.59a.5.5 0 01-.1 1h-.32a1.67 1.67 0 002.53.16.5.5 0 11.72.69A2.66 2.66 0 016 9.76V10.1a.5.5 0 01-1-.1V8.41A.5.5 0 015.5 8zM8 5.33c.79 0 1.5.35 2 .9v-.32a.5.5 0 011 .1v1.58a.5.5 0 01-.5.41H8.91a.5.5 0 01.1-1h.32a1.67 1.67 0 00-2.53-.15.5.5 0 01-.73-.7c.5-.52 1.2-.82 1.93-.82z" fill={primaryFill} /></svg>;
}

const ArrowSyncCircle16Filled = wrapIcon(rawSvg({}), 'ArrowSyncCircle16Filled');
export default ArrowSyncCircle16Filled;
      