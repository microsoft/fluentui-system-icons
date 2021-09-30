import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.74 4.28a4 4 0 016.41-1.04l6.61 6.61a4 4 0 01-1.04 6.4l-6.35 3.18a1.5 1.5 0 00-.75.87l-1.66 4.98a2 2 0 01-3.31.78l-4.15-4.15L5.41 28H4v-1.41l6.09-6.09-4.15-4.15a2 2 0 01.78-3.31l4.98-1.66c.38-.13.7-.4.87-.75l3.17-6.35z" fill={primaryFill} /></svg>;
}

const Pin32Filled = wrapIcon(rawSvg({}), 'Pin32Filled');
export default Pin32Filled;
      