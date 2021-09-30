import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.66 2.74a2.4 2.4 0 00-3.45-.01 2.55 2.55 0 000 3.53L5.76 9.9c.15.15.38.15.53 0l3.51-3.6c.95-.98.95-2.56 0-3.54a2.4 2.4 0 00-3.46 0L6 3.08l-.34-.35z" fill={primaryFill} /></svg>;
}

const Heart12Filled = wrapIcon(rawSvg({}), 'Heart12Filled');
export default Heart12Filled;
      