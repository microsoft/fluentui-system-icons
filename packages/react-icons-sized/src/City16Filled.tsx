import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 1.5a.5.5 0 00-1 0V2h-1C5.67 2 5 2.67 5 3.5V4a2 2 0 012 2v8h2V7.5c0-1.2.86-2.21 2-2.45V3.5c0-.83-.67-1.5-1.5-1.5h-1v-.5z" fill={primaryFill} /><path d="M12.5 14H10V7.5c0-.82.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" fill={primaryFill} /><path d="M4.84 5.13A.75.75 0 016 5.76v7.74a.5.5 0 01-.5.5h-2A1.5 1.5 0 012 12.5V7.8c0-.51.26-.99.68-1.27l2.16-1.4z" fill={primaryFill} /></svg>;
}

const City16Filled = wrapIcon(rawSvg({}), 'City16Filled');
export default City16Filled;
      