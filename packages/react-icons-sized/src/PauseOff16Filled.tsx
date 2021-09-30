import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.15 13.85l1 1a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l1 1c-.1.2-.15.42-.15.65v9c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V7.7l2 2v2.8c0 .83.67 1.5 1.5 1.5h2c.23 0 .45-.05.65-.15zM9 6.88l5 5V3.5c0-.83-.67-1.5-1.5-1.5h-2C9.67 2 9 2.67 9 3.5v3.38zM4.12 2L7 4.88V3.5C7 2.67 6.33 2 5.5 2H4.12z" fill={primaryFill} /></svg>;
}

const PauseOff16Filled = wrapIcon(rawSvg({}), 'PauseOff16Filled');
export default PauseOff16Filled;
      