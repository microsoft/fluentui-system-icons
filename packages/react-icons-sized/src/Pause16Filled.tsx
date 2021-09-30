import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2C2.67 2 2 2.67 2 3.5v9c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-9C7 2.67 6.33 2 5.5 2h-2z" fill={primaryFill} /><path d="M10.5 2C9.67 2 9 2.67 9 3.5v9c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-2z" fill={primaryFill} /></svg>;
}

const Pause16Filled = wrapIcon(rawSvg({}), 'Pause16Filled');
export default Pause16Filled;
      