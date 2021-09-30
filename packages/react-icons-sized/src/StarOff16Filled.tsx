import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.36 13.06l1.79 1.8a.5.5 0 00.7-.71l-13-13a.5.5 0 10-.7.7l3.48 3.49-2.36.34a.9.9 0 00-.5 1.53l2.46 2.4L3.65 13a.9.9 0 001.3.95L8 12.35l3.04 1.6a.9.9 0 001.32-.88z" fill={primaryFill} /><path d="M11.77 9.61v.04L6.22 4.1 7.2 2.1a.9.9 0 011.62 0l1.52 3.08 3.4.5a.9.9 0 01.5 1.53l-2.46 2.4z" fill={primaryFill} /></svg>;
}

const StarOff16Filled = wrapIcon(rawSvg({}), 'StarOff16Filled');
export default StarOff16Filled;
      