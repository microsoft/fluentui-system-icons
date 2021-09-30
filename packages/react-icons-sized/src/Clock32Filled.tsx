import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 30a14 14 0 100-28 14 14 0 000 28zM14 9a1 1 0 112 0v7h4a1 1 0 110 2h-5a1 1 0 01-1-1V9z" fill={primaryFill} /></svg>;
}

const Clock32Filled = wrapIcon(rawSvg({}), 'Clock32Filled');
export default Clock32Filled;
      