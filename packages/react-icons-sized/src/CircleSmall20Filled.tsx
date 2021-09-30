import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 10a3 3 0 11-6 0 3 3 0 016 0z" fill={primaryFill} /></svg>;
}

const CircleSmall20Filled = wrapIcon(rawSvg({}), 'CircleSmall20Filled');
export default CircleSmall20Filled;
      