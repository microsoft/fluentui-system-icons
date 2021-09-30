import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 18a1 1 0 110 2 1 1 0 010-2zM7 4h10a1 1 0 01.12 2H12.35l8.01 3.1a1 1 0 01.2 1.77l-.11.06-14 6.97a1 1 0 01-1-1.74l.1-.06 11.98-5.95-10.9-4.22c-.99-.38-.76-1.82.25-1.92L7 4h10H7zm13 0a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
}

const Gesture24Filled = wrapIcon(rawSvg({}), 'Gesture24Filled');
export default Gesture24Filled;
      