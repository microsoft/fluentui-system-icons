import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 3a1 1 0 10-2 0v9a1 1 0 102 0V3z" fill={primaryFill} /><path d="M10.4 6.75a1 1 0 10-.8-1.83 11 11 0 108.8 0 1 1 0 00-.8 1.83 9 9 0 11-7.2 0z" fill={primaryFill} /></svg>;
}

const Power28Filled = wrapIcon(rawSvg({}), 'Power28Filled');
export default Power28Filled;
      