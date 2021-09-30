import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.75C3 1.78 3.78 1 4.75 1h6.5c.97 0 1.75.78 1.75 1.75v3.46A5.5 5.5 0 007.26 15H4.75C3.78 15 3 14.22 3 13.25V2.75zM6 9a1 1 0 100-2 1 1 0 000 2zm10 2.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.85-.35a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L10.71 12h2.79a.5.5 0 000-1h-2.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2z" fill={primaryFill} /></svg>;
}

const DoorArrowLeft16Filled = wrapIcon(rawSvg({}), 'DoorArrowLeft16Filled');
export default DoorArrowLeft16Filled;
      