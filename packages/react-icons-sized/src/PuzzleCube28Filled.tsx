import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 11v6h6.5v-6H3zm0 7.5v2.75A3.75 3.75 0 006.75 25H9.5v-6.5H3zm8 6.5h6v-6.5h-6V25zm7.5 0h2.75A3.75 3.75 0 0025 21.25V18.5h-6.5V25zm6.5-8v-6h-6.5v6H25zm0-7.5V6.75A3.75 3.75 0 0021.25 3H18.5v6.5H25zM17 3h-6v6.5h6V3zm0 8v6h-6v-6h6z" fill={primaryFill} /></svg>;
}

const PuzzleCube28Filled = wrapIcon(rawSvg({}), 'PuzzleCube28Filled');
export default PuzzleCube28Filled;
      