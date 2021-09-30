import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 1a6 6 0 016 6.2 2.5 2.5 0 00-3.46 1.85A2 2 0 008 11v1.92A6 6 0 117 1zm2.12 4.16L6.25 8.04l-1.4-1.4a.5.5 0 10-.7.71L5.9 9.1c.2.2.5.2.7 0l3.23-3.23a.5.5 0 00-.71-.7zm1.3 4.84h.08v-.5a1.5 1.5 0 113 0v.5h.5a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3a1 1 0 011-1h.43zM12 9a.5.5 0 00-.5.5v.5h1v-.5A.5.5 0 0012 9zm.5 3.5a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const CheckmarkLock16Filled = wrapIcon(rawSvg({}), 'CheckmarkLock16Filled');
export default CheckmarkLock16Filled;
      