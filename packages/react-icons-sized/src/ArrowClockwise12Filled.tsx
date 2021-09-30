import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2A.75.75 0 009 2v.65a4.5 4.5 0 101.42 4.2c.09-.46-.3-.85-.78-.85-.35 0-.63.3-.7.64A3 3 0 117.66 3.5h-.42a.75.75 0 000 1.5h2.5c.41 0 .75-.33.75-.75V2z" fill={primaryFill} /></svg>;
}

const ArrowClockwise12Filled = wrapIcon(rawSvg({}), 'ArrowClockwise12Filled');
export default ArrowClockwise12Filled;
      