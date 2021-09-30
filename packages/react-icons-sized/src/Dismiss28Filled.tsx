import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.08 4.1a1 1 0 011.42 0l8.5 8.5 8.5-8.5a1 1 0 111.42 1.42l-8.5 8.5 8.46 8.46a1 1 0 11-1.41 1.42L14 15.43 5.53 23.9a1 1 0 01-1.41-1.42l8.47-8.46-8.5-8.5a1 1 0 010-1.42z" fill={primaryFill} /></svg>;
}

const Dismiss28Filled = wrapIcon(rawSvg({}), 'Dismiss28Filled');
export default Dismiss28Filled;
      