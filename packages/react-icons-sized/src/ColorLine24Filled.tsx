import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.38 14H4a2 2 0 00-2 2v4c0 1.1.9 2 2 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-6.45l-1.32 1.31c-.38.38-.85.66-1.36.82l-4.3 1.29a2 2 0 01-2.47-2.53l.28-.89z" fill={primaryFill} /><path d="M18.65 2.94a3.22 3.22 0 010 4.56l-7.13 7.1c-.26.27-.58.46-.94.57l-4.3 1.29a1 1 0 01-1.23-1.27l1.36-4.22c.1-.35.3-.65.55-.9l7.13-7.13a3.22 3.22 0 014.56 0z" fill={primaryFill} /></svg>;
}

const ColorLine24Filled = wrapIcon(rawSvg({}), 'ColorLine24Filled');
export default ColorLine24Filled;
      