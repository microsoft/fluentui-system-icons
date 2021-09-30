import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.31 1.27a1 1 0 011.38 0l4.84 4.58c.3.28.47.68.47 1.09v5.56c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 012 12.5V6.94c0-.41.17-.8.47-1.1L7.3 1.28zm3.54 5.59a.5.5 0 10-.7-.7L7 9.3 5.85 8.15a.5.5 0 00-.7.7l1.5 1.5c.2.2.5.2.7 0l3.5-3.49z" fill={primaryFill} /></svg>;
}

const HomeCheckmark16Filled = wrapIcon(rawSvg({}), 'HomeCheckmark16Filled');
export default HomeCheckmark16Filled;
      