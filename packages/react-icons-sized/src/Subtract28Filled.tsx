import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 14a1 1 0 011-1h20a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const Subtract28Filled = wrapIcon(rawSvg({}), 'Subtract28Filled');
export default Subtract28Filled;
      