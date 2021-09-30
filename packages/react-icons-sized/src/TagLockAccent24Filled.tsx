import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 2.5a1.75 1.75 0 011.75 1.75v5.46a2.73 2.73 0 01-.8 1.95l-.33.33A3.5 3.5 0 0014 14v.05a2.5 2.5 0 00-2 2.45v3.84a2.75 2.75 0 01-3.69-.18L3.84 15.7a2.75 2.75 0 010-3.88l8.5-8.51a2.73 2.73 0 011.95-.81h5.46zM14.29 2zm7.31.97zm-.52-.54z" fill={primaryFill} /></svg>;
}

const TagLockAccent24Filled = wrapIcon(rawSvg({}), 'TagLockAccent24Filled');
export default TagLockAccent24Filled;
      