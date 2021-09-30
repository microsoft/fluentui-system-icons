import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5C3 4.67 3.67 4 4.5 4h7c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 9.5v-4z" fill={primaryFill} /><path d="M2.5 12a.5.5 0 000 1h11a.5.5 0 000-1h-11z" fill={primaryFill} /></svg>;
}

const Laptop16Filled = wrapIcon(rawSvg({}), 'Laptop16Filled');
export default Laptop16Filled;
      