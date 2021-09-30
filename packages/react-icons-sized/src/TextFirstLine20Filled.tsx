import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.28 2.22a.75.75 0 00-1.06 1.06l.97.97-.97.97a.75.75 0 001.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06l-1.5-1.5z" fill={primaryFill} /><path d="M16.25 3.5h-7.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M3.75 13.5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" fill={primaryFill} /><path d="M16.25 10H3.75a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5z" fill={primaryFill} /></svg>;
}

const TextFirstLine20Filled = wrapIcon(rawSvg({}), 'TextFirstLine20Filled');
export default TextFirstLine20Filled;
      