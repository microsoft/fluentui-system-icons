import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 8v2H8.5A3.5 3.5 0 005 13.5v13A3.5 3.5 0 008.5 30h15a3.5 3.5 0 003.5-3.5v-13a3.5 3.5 0 00-3.5-3.5H22V8a6 6 0 00-12 0zm6-4a4 4 0 014 4v2h-8V8a4 4 0 014-4zm0 18a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /></svg>;
}

const LockClosed32Filled = wrapIcon(rawSvg({}), 'LockClosed32Filled');
export default LockClosed32Filled;
      