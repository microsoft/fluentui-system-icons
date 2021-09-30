import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.8 2.1a.9.9 0 00-1.6 0L5.66 5.18l-3.4.5a.9.9 0 00-.5 1.53l2.46 2.4L3.65 13a.9.9 0 001.3.95L8 12.35l3.04 1.6a.9.9 0 001.3-.95l-.57-3.39 2.46-2.4a.9.9 0 00-.5-1.53l-3.4-.5L8.8 2.1zM6 12.27V6.14a.9.9 0 00.55-.47L8 2.73l1.46 2.94a.9.9 0 00.67.5l3.26.47-2.36 2.3a.9.9 0 00-.26.79l.56 3.24-2.91-1.53a.9.9 0 00-.84 0L6 12.27z" fill={primaryFill} /></svg>;
}

const StarOneQuarter16Filled = wrapIcon(rawSvg({}), 'StarOneQuarter16Filled');
export default StarOneQuarter16Filled;
      