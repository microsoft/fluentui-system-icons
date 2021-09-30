import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 14A6 6 0 108 2a6 6 0 000 12z" fill={primaryFill} /></svg>;
}

const Circle16Filled = wrapIcon(rawSvg({}), 'Circle16Filled');
export default Circle16Filled;
      