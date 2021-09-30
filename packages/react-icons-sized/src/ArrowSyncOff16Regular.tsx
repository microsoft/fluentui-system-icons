import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.42 4.13a5.98 5.98 0 00.8 8.53.5.5 0 00.63-.78 4.99 4.99 0 01-.72-7.04l7.03 7.03A4.98 4.98 0 018.21 13l.64-.65a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7L8.2 14a5.97 5.97 0 003.67-1.42l2.28 2.27a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l2.27 2.28zm9.01 6.18l.74.74a5.97 5.97 0 00-1.4-7.71.5.5 0 10-.62.78 4.99 4.99 0 011.28 6.2zM4.95 2.83l.74.74A4.97 4.97 0 017.79 3l-.64.65a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7L7.85.65a.5.5 0 10-.7.7L7.8 2c-1.04.04-2 .34-2.85.83z" fill={primaryFill} /></svg>;
}

const ArrowSyncOff16Regular = wrapIcon(rawSvg({}), 'ArrowSyncOff16Regular');
export default ArrowSyncOff16Regular;
      