import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 29a1 1 0 102 0V3a1 1 0 10-2 0v26zm11.5-3h-8V6h8A3.5 3.5 0 0130 9.5v13a3.5 3.5 0 01-3.5 3.5zm-13-20h-8A3.5 3.5 0 002 9.5v13A3.5 3.5 0 005.5 26h8V6z" fill={primaryFill} /></svg>;
}

const SplitVertical32Filled = wrapIcon(rawSvg({}), 'SplitVertical32Filled');
export default SplitVertical32Filled;
      