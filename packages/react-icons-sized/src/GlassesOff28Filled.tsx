import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.33 4.34-3.58 3.54-.3.28-.02.03c-.4.48-.65 1.1-.65 1.78v4A3.75 3.75 0 005.75 21h3.5A3.75 3.75 0 0013 17.25v-3h.19L15 16.06v1.19A3.75 3.75 0 0018.75 21h1.19l4.78 4.78a.75.75 0 001.06-1.06L3.28 2.22zm6.16 8.28H5.77l1.85-1.82 1.82 1.82z" fill={primaryFill} /><path d="M9.19 6l1.5 1.5h.06a.75.75 0 000-1.5H9.19z" fill={primaryFill} /><path d="M23.83 20.65l-8.57-8.57a2.75 2.75 0 012.49-1.58h4.48l-2.67-2.64a1.25 1.25 0 00-.88-.36h-1.43a.75.75 0 010-1.5h1.43c.72 0 1.42.28 1.93.8l4.42 4.35.3.3.02.02c.4.48.65 1.1.65 1.78v4c0 1.5-.89 2.8-2.17 3.4z" fill={primaryFill} /></svg>;
}

const GlassesOff28Filled = wrapIcon(rawSvg({}), 'GlassesOff28Filled');
export default GlassesOff28Filled;
      