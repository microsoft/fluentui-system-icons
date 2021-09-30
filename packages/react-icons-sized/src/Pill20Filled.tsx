import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.15 3.15a4.04 4.04 0 115.7 5.7l-8 8a4.04 4.04 0 11-5.7-5.7l8-8zm5 .7a3.04 3.04 0 00-4.3 0L8.21 7.5l4.29 4.3 3.65-3.65a3.04 3.04 0 000-4.3zm-7.3 10.3a.5.5 0 00-.7 0l-1.5 1.5a.91.91 0 01-1.3 0 .5.5 0 10-.7.7c.75.75 1.96.75 2.7 0l1.5-1.5a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const Pill20Filled = wrapIcon(rawSvg({}), 'Pill20Filled');
export default Pill20Filled;
      