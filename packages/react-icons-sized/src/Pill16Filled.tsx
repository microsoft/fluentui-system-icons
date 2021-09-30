import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3.05A3.5 3.5 0 0112.95 8L8 12.95A3.5 3.5 0 113.05 8L8 3.05zm2.12 6.36l2.12-2.12a2.5 2.5 0 00-3.53-3.53L6.59 5.88l3.53 3.53zm-2.27 1.44a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 00.7.7l1.5-1.5z" fill={primaryFill} /></svg>;
}

const Pill16Filled = wrapIcon(rawSvg({}), 'Pill16Filled');
export default Pill16Filled;
      