import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M6 12a6 6 0 1112 0 6 6 0 01-12 0zm6-4a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm10-8a8 8 0 100 16 8 8 0 000-16z" fill={primaryFill} /></svg>;
}

const Target24Filled = wrapIcon(rawSvg({}), 'Target24Filled');
export default Target24Filled;
      