import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.15 1.08a.5.5 0 01.7.15l3.1 4.76h4.35c.39 0 .7.32.7.7V8a7 7 0 01-3.35 5.98h2.13a.5.5 0 010 1H8.59a7.1 7.1 0 01-1.18 0H2.22a.5.5 0 010-1h2.13A7 7 0 011 8V6.7c0-.4.31-.7.7-.7h4.25L3.21 1.76a.5.5 0 01.83-.54l3.1 4.76h1.61L6.01 1.77a.5.5 0 01.14-.69zM2 7v1c0 .35.03.68.08 1h11.84c.05-.32.08-.65.08-1V7H2zm11.66 3H2.34a6 6 0 005.11 3.98h1.1a6 6 0 005.1-3.97z" fill={primaryFill} /></svg>;
}

const BowlChopsticks16Regular = wrapIcon(rawSvg({}), 'BowlChopsticks16Regular');
export default BowlChopsticks16Regular;
      