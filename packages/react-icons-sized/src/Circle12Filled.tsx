import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a5 5 0 100 10A5 5 0 006 1z" fill={primaryFill} /></svg>;
}

const Circle12Filled = wrapIcon(rawSvg({}), 'Circle12Filled');
export default Circle12Filled;
      