import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 14v1.5A2.5 2.5 0 009.5 18h6a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0015.5 7H14v1h1.5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 018 15.5V14H7z" fill={primaryFill} /><path d="M2 4.5A2.5 2.5 0 014.5 2h6A2.5 2.5 0 0113 4.5v6a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 012 10.5v-6z" fill={primaryFill} /></svg>;
}

const PositionForward20Filled = wrapIcon(rawSvg({}), 'PositionForward20Filled');
export default PositionForward20Filled;
      