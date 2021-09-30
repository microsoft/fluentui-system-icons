import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1a2.5 2.5 0 00-.5 4.95V7.5h-2C4.67 7.5 4 8.17 4 9v1.05a2.5 2.5 0 101 0V9c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v1.05a2.5 2.5 0 101 0V9c0-.83-.67-1.5-1.5-1.5h-2V5.95A2.5 2.5 0 008 1z" fill={primaryFill} /></svg>;
}

const Organization16Filled = wrapIcon(rawSvg({}), 'Organization16Filled');
export default Organization16Filled;
      