import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8A6 6 0 012 8h3.88l-.85 2.33a.5.5 0 00.94.34l2-5.5a.5.5 0 10-.94-.34L6.24 7H2.08a6 6 0 0111.84 0H10.3l.67-1.83a.5.5 0 10-.94-.34l-2 5.5a.5.5 0 00.94.34L9.94 8H14z" fill={primaryFill} /></svg>;
}

const SyncOff16Filled = wrapIcon(rawSvg({}), 'SyncOff16Filled');
export default SyncOff16Filled;
      