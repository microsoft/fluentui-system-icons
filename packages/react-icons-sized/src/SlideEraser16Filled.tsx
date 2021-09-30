import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.75C1 2.78 1.78 2 2.75 2h10.5c.97 0 1.75.78 1.75 1.75v4.32l-1.4-1.41a2.25 2.25 0 00-3.2 0l-3.74 3.75A2.24 2.24 0 006 12H2.75C1.78 12 1 11.22 1 10.25v-6.5zm10.12 3.62a1.25 1.25 0 011.76 0l1.75 1.75c.5.48.5 1.28 0 1.76l-2.57 2.58-3.52-3.52 2.58-2.57zm-3.18 3.17l-.57.58a1.25 1.25 0 000 1.76l1.75 1.75c.48.5 1.28.5 1.76 0l.58-.57-3.52-3.52z" fill={primaryFill} /></svg>;
}

const SlideEraser16Filled = wrapIcon(rawSvg({}), 'SlideEraser16Filled');
export default SlideEraser16Filled;
      