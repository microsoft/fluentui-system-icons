import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.68 4a3 3 0 00-2.05.8L4.45 16.2a3.25 3.25 0 00-.07 4.68l6.32 6.32a3.25 3.25 0 004.3.27V22a4 4 0 013.08-3.9 5 5 0 018.7-2.38l.34-.34a3 3 0 00.88-2.12V6.5A2.5 2.5 0 0025.5 4h-6.82z" fill={primaryFill} /></svg>;
}

const TagLockAccent32Filled = wrapIcon(rawSvg({}), 'TagLockAccent32Filled');
export default TagLockAccent32Filled;
      