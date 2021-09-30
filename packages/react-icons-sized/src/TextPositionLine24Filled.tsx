import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3.75a1 1 0 000 2h16.5a1 1 0 100-2H3.75z" fill={primaryFill} /><path d="M7 8.75c-1.24 0-2.25 1-2.25 2.25v4.75a1 1 0 11-2 0V11a4.25 4.25 0 018.5 0v4.75a1 1 0 11-2 0V11c0-1.24-1-2.25-2.25-2.25z" fill={primaryFill} /><path d="M13.75 14.25a1 1 0 100 2h6.5a1 1 0 100-2h-6.5z" fill={primaryFill} /><path d="M3.75 17.75a1 1 0 100 2h16.5a1 1 0 100-2H3.75z" fill={primaryFill} /></svg>;
}

const TextPositionLine24Filled = wrapIcon(rawSvg({}), 'TextPositionLine24Filled');
export default TextPositionLine24Filled;
      