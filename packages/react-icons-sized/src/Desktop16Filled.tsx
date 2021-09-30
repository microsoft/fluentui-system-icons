import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2C2.67 2 2 2.67 2 3.5v7c0 .83.67 1.5 1.5 1.5H6v1H4.5a.5.5 0 000 1h7a.5.5 0 000-1H10v-1h2.5c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-9zM9 12v1H7v-1h2z" fill={primaryFill} /></svg>;
}

const Desktop16Filled = wrapIcon(rawSvg({}), 'Desktop16Filled');
export default Desktop16Filled;
      