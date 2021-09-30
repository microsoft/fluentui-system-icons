import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 14a6 6 0 016-6h12a6 6 0 010 12H8a6 6 0 01-6-6zm7 3a3 3 0 100-6 3 3 0 000 6z" fill={primaryFill} /></svg>;
}

const ToggleLeft28Filled = wrapIcon(rawSvg({}), 'ToggleLeft28Filled');
export default ToggleLeft28Filled;
      