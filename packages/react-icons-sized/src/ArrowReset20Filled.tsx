import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.03 2.47c.3.3.3.77 0 1.06L4.81 4.75H11A6.25 6.25 0 114.75 11a.75.75 0 011.5 0A4.75 4.75 0 1011 6.25H4.81l1.22 1.22a.75.75 0 01-1.06 1.06l-2.5-2.5a.75.75 0 010-1.06l2.5-2.5c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const ArrowReset20Filled = wrapIcon(rawSvg({}), 'ArrowReset20Filled');
export default ArrowReset20Filled;
      