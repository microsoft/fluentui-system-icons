import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 6c0-1.1.9-2 2-2h8v10H16V6zM6 16a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8V16H6zm20 0H16v10h8a2 2 0 002-2v-8zM36 4h-8v10h8a2 2 0 002-2V6a2 2 0 00-2-2zM10 35c0-1.1.9-2 2-2h8v10h-8a2 2 0 01-2-2v-6zm22-2H22v10h10V33zm2 0h10v8a2 2 0 01-2 2h-8V33zm2-12a2 2 0 00-2 2v8h10v-8a2 2 0 00-2-2h-6z" fill={primaryFill} /></svg>;
}

const TetrisApp48Filled = wrapIcon(rawSvg({}), 'TetrisApp48Filled');
export default TetrisApp48Filled;
      