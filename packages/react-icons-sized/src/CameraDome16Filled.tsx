import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.5C1 2.67 1.67 2 2.5 2h11a1.5 1.5 0 010 3h-11A1.5 1.5 0 011 3.5zM8 8a2 2 0 100 4 2 2 0 000-4zm-1 2a1 1 0 112 0 1 1 0 01-2 0zm7-4H2v3a6 6 0 0012 0V6zm-9 4a3 3 0 116 0 3 3 0 01-6 0z" fill={primaryFill} /></svg>;
}

const CameraDome16Filled = wrapIcon(rawSvg({}), 'CameraDome16Filled');
export default CameraDome16Filled;
      