import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3C2.67 3 2 3.67 2 4.5v4c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-13zm0 9c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-4zm9 0c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-4z" fill={primaryFill} /></svg>;
}

const BroadActivityFeed20Filled = wrapIcon(rawSvg({}), 'BroadActivityFeed20Filled');
export default BroadActivityFeed20Filled;
      