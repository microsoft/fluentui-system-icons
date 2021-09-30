import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2c-1.4 0-2.42.57-3.07 1.37a4.2 4.2 0 00-.9 2.15C1.97 5.73 1 7.32 1 8.5c0 .57.14 1.33.69 1.95.55.64 1.46 1.05 2.81 1.05h.64A3.5 3.5 0 018.5 7h4c.96 0 1.82.38 2.46 1a2.83 2.83 0 00-1.1-1.72 3.86 3.86 0 00-1.88-.75 3.73 3.73 0 00-1.35-2.6A4.23 4.23 0 008 2zm.5 6a2.5 2.5 0 000 5H9a.5.5 0 000-1h-.5a1.5 1.5 0 010-3H9a.5.5 0 000-1h-.5zM12 8a.5.5 0 000 1h.5a1.5 1.5 0 010 3H12a.5.5 0 000 1h.5a2.5 2.5 0 000-5H12zm-3.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
}

const CloudLink16Filled = wrapIcon(rawSvg({}), 'CloudLink16Filled');
export default CloudLink16Filled;
      