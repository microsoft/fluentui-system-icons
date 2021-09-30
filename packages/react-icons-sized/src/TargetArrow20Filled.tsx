import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.6 7.52a8 8 0 11-5.11-5.13l-1.05 1.05a1.5 1.5 0 00-.16.19 6.5 6.5 0 105.09 5.1l.2-.17 1.03-1.04zM14.9 9a5.02 5.02 0 01-4.9 6 5 5 0 111-9.9v1.55A3.5 3.5 0 1013.35 9h1.55zM10 11.5a1.5 1.5 0 001.45-1.89l1.58-1.58a.74.74 0 00.03-.03h2.44a.5.5 0 00.35-.15l2-2A.5.5 0 0017.5 5H15V2.5a.5.5 0 00-.85-.35l-2 2a.5.5 0 00-.15.35v2.44a.77.77 0 00-.03.03l-1.58 1.58a1.5 1.5 0 10-.4 2.95z" fill={primaryFill} /></svg>;
}

const TargetArrow20Filled = wrapIcon(rawSvg({}), 'TargetArrow20Filled');
export default TargetArrow20Filled;
      