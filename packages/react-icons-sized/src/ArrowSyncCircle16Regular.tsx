import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 1a5 5 0 110 10A5 5 0 018 3zM7 8H5.5a.5.5 0 00-.5.41V10a.5.5 0 001 .1V9.75a2.67 2.67 0 003.92.09.5.5 0 00-.72-.7A1.66 1.66 0 016.67 9H7a.5.5 0 00.09-1h-.1zm1-2.67c-.74 0-1.43.3-1.93.83a.5.5 0 10.73.69A1.66 1.66 0 019.33 7H9a.5.5 0 00-.09 1h1.59a.5.5 0 00.5-.41V6a.5.5 0 00-1-.09v.33c-.5-.56-1.21-.9-2-.9z" fill={primaryFill} /></svg>;
}

const ArrowSyncCircle16Regular = wrapIcon(rawSvg({}), 'ArrowSyncCircle16Regular');
export default ArrowSyncCircle16Regular;
      