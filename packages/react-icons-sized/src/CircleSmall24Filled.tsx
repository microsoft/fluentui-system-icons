import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 12a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /></svg>;
}

const CircleSmall24Filled = wrapIcon(rawSvg({}), 'CircleSmall24Filled');
export default CircleSmall24Filled;
      