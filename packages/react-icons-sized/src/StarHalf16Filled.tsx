import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.67 5.18L7.2 2.1c.17-.33.49-.5.81-.5.32 0 .64.17.8.5l1.53 3.08 3.4.5a.9.9 0 01.5 1.53l-2.46 2.4.58 3.39a.9.9 0 01-1.3.95L8 12.35l-3.04 1.6a.9.9 0 01-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 01.5-1.53l3.4-.5zM8 11.34a.9.9 0 01.42.1l2.9 1.53-.55-3.24a.9.9 0 01.26-.8l2.36-2.3-3.26-.46a.9.9 0 01-.67-.5L8 2.73v8.6z" fill={primaryFill} /></svg>;
}

const StarHalf16Filled = wrapIcon(rawSvg({}), 'StarHalf16Filled');
export default StarHalf16Filled;
      