import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75z" fill={primaryFill} /><path d="M2 9.75c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75z" fill={primaryFill} /><path d="M2.75 14a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /></svg>;
}

const LineHorizontal320Filled = wrapIcon(rawSvg({}), 'LineHorizontal320Filled');
export default LineHorizontal320Filled;
      