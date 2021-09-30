import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 6a5 5 0 1110 0A5 5 0 011 6zm7.35-.9a.5.5 0 10-.7-.7L5.5 6.54 4.35 5.4a.5.5 0 10-.7.7l1.5 1.5c.2.2.5.2.7 0l2.5-2.5z" fill={primaryFill} /></svg>;
}

const CheckmarkCircle12Filled = wrapIcon(rawSvg({}), 'CheckmarkCircle12Filled');
export default CheckmarkCircle12Filled;
      