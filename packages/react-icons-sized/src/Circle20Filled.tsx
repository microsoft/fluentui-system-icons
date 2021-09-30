import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 100 16 8 8 0 000-16z" fill={primaryFill} /></svg>;
}

const Circle20Filled = wrapIcon(rawSvg({}), 'Circle20Filled');
export default Circle20Filled;
      