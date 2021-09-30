import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4a2 2 0 114 0v3.5h2.75c1.24 0 2.25 1 2.25 2.25v1.75H5.09c.01-.72 0-1.35-.02-1.87A2.06 2.06 0 017.11 7.5H10V4z" fill={primaryFill} /><path d="M5.04 13H19v1.15a1.74 1.74 0 00-2.45 1.6v2.44a1.75 1.75 0 00-2.04 2.8L15.53 22h-4.98c.17-.38.36-.87.54-1.39a9.53 9.53 0 00.41-1.84v-.02a.75.75 0 10-1.5.03l-.04.23c-.04.23-.12.6-.3 1.13A16.83 16.83 0 018.91 22H7.57l.4-.93c.4-.97.88-2.23 1.02-3.21a.75.75 0 00-1.48-.22c-.11.77-.51 1.88-.92 2.85A32.38 32.38 0 015.91 22H3.75a.75.75 0 01-.63-1.16c.95-1.46 1.47-3.58 1.73-5.73.1-.72.15-1.43.19-2.11z" fill={primaryFill} /><path d="M15.22 19.22c.3-.3.77-.3 1.06 0l1.27 1.27v-4.74a.75.75 0 011.5 0v4.64l1.17-1.17a.75.75 0 111.06 1.06l-2.5 2.5a.75.75 0 01-1.06 0l-2.5-2.5a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const PaintBrushArrowDown24Filled = wrapIcon(rawSvg({}), 'PaintBrushArrowDown24Filled');
export default PaintBrushArrowDown24Filled;
      