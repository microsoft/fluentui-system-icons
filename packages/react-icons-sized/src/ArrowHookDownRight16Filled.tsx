import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.46 5.09A3.78 3.78 0 017.25 4h3a.75.75 0 010 1.5h-3c-.82 0-1.37.28-1.71.63C5.19 6.5 5 7 5 7.5c0 .5.19 1 .54 1.37.34.35.9.63 1.71.63h3.19l-.72-.72a.75.75 0 011.06-1.06l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 11-1.06-1.06l.72-.72H7.25a3.78 3.78 0 01-2.79-1.09A3.46 3.46 0 013.5 7.5c0-.87.31-1.75.96-2.41z" fill={primaryFill} /></svg>;
}

const ArrowHookDownRight16Filled = wrapIcon(rawSvg({}), 'ArrowHookDownRight16Filled');
export default ArrowHookDownRight16Filled;
      