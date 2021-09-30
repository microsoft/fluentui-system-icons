import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 15a1 1 0 100 2h26a1 1 0 100-2H3zm3 11.5v-8h20v8a3.5 3.5 0 01-3.5 3.5h-13A3.5 3.5 0 016 26.5zm20-13v-8A3.5 3.5 0 0022.5 2h-13A3.5 3.5 0 006 5.5v8h20z" fill={primaryFill} /></svg>;
}

const SplitHorizontal32Filled = wrapIcon(rawSvg({}), 'SplitHorizontal32Filled');
export default SplitHorizontal32Filled;
      