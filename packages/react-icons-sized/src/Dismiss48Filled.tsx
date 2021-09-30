import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.02 7.05a1.5 1.5 0 012.12 0L24 21.91 38.85 7.05a1.5 1.5 0 112.13 2.12L26.12 24.03l14.8 14.8a1.5 1.5 0 11-2.12 2.12L24 26.15 9.2 40.95a1.5 1.5 0 11-2.12-2.12l14.8-14.8L7.02 9.17a1.5 1.5 0 010-2.12z" fill={primaryFill} /></svg>;
}

const Dismiss48Filled = wrapIcon(rawSvg({}), 'Dismiss48Filled');
export default Dismiss48Filled;
      