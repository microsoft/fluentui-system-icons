import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3.5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M8.75 13.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /><path d="M8 9.25c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 018 9.25z" fill={primaryFill} /><path d="M4.28 10.72a.75.75 0 00-1.06 1.06l.97.97-.97.97a.75.75 0 101.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06l-1.5-1.5z" fill={primaryFill} /></svg>;
}

const TextHanging20Filled = wrapIcon(rawSvg({}), 'TextHanging20Filled');
export default TextHanging20Filled;
      