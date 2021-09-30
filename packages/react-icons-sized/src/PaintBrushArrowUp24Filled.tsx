import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a2 2 0 00-2 2v3.5H7.11c-1.17 0-2.08 1-2.04 2.13.02.4.02 1.36.02 1.87H19V9.75c0-1.24-1-2.25-2.25-2.25H14V4a2 2 0 00-2-2z" fill={primaryFill} /><path d="M4.85 15.11c.1-.72.19-2.11.19-2.11H19v1.17a1.75 1.75 0 00-1.99.34l-2.5 2.5a1.75 1.75 0 002.04 2.8V22h-6c.17-.38.36-.87.54-1.39a9.53 9.53 0 00.41-1.84v-.02s0-.75-.75-.75a.75.75 0 00-.75.78l-.04.23c-.04.23-.12.6-.3 1.13A16.83 16.83 0 018.91 22H7.57l.4-.93c.4-.97.88-2.23 1.02-3.21a.75.75 0 00-1.48-.22c-.11.77-.51 1.88-.92 2.85A32.38 32.38 0 015.91 22H3.75a.75.75 0 01-.63-1.16c.95-1.46 1.47-3.58 1.73-5.73z" fill={primaryFill} /><path d="M16.28 18.78a.75.75 0 11-1.06-1.06l2.5-2.5a.75.75 0 011.06 0l2.5 2.5a.75.75 0 11-1.06 1.06L19 17.56v4.69a.75.75 0 01-1.5 0v-4.69l-1.22 1.22z" fill={primaryFill} /></svg>;
}

const PaintBrushArrowUp24Filled = wrapIcon(rawSvg({}), 'PaintBrushArrowUp24Filled');
export default PaintBrushArrowUp24Filled;
      