import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a20 20 0 110 40 20 20 0 010-40zm8.63 13.62a1.25 1.25 0 00-1.66-.1l-.1.1-10.12 10.11-3.62-3.61a1.25 1.25 0 00-1.85 1.66l.09.1 4.5 4.5c.45.46 1.17.49 1.66.1l.1-.1 11-11c.5-.48.5-1.28 0-1.76z" fill={primaryFill} /></svg>;
}

const CheckmarkCircle48Filled = wrapIcon(rawSvg({}), 'CheckmarkCircle48Filled');
export default CheckmarkCircle48Filled;
      