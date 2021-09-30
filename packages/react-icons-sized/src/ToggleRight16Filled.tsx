import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4a4 4 0 100 8h6a4 4 0 000-8H5zm6 6a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /></svg>;
}

const ToggleRight16Filled = wrapIcon(rawSvg({}), 'ToggleRight16Filled');
export default ToggleRight16Filled;
      