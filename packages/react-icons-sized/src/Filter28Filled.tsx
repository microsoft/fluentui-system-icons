import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 19a1 1 0 110 2h-6a1 1 0 110-2h6zm4-6a1 1 0 110 2H7a1 1 0 110-2h14zm3-6a1 1 0 110 2H4a1 1 0 010-2h20z" fill={primaryFill} /></svg>;
}

const Filter28Filled = wrapIcon(rawSvg({}), 'Filter28Filled');
export default Filter28Filled;
      