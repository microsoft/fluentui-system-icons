import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M26 14a6 6 0 00-6-6H8a6 6 0 000 12h12a6 6 0 006-6zm-7 3a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /></svg>;
}

const ToggleRight28Filled = wrapIcon(rawSvg({}), 'ToggleRight28Filled');
export default ToggleRight28Filled;
      