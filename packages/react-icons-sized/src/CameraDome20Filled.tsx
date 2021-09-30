import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5C2 3.67 2.67 3 3.5 3h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 4.5zM10 9a3 3 0 100 6 3 3 0 000-6zm-2 3a2 2 0 114 0 2 2 0 01-4 0zM3 7h14v4a7 7 0 11-14 0V7zm7 1a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /></svg>;
}

const CameraDome20Filled = wrapIcon(rawSvg({}), 'CameraDome20Filled');
export default CameraDome20Filled;
      