import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4a1 1 0 012 0v24a1 1 0 11-2 0V4zm7.5 1A3.5 3.5 0 007 8.5v3a3.5 3.5 0 003.5 3.5h15a3.5 3.5 0 003.5-3.5v-3A3.5 3.5 0 0025.5 5h-15zm0 12A3.5 3.5 0 007 20.5v3a3.5 3.5 0 003.5 3.5h9a3.5 3.5 0 003.5-3.5v-3a3.5 3.5 0 00-3.5-3.5h-9z" fill={primaryFill} /></svg>;
}

const AlignLeft32Filled = wrapIcon(rawSvg({}), 'AlignLeft32Filled');
export default AlignLeft32Filled;
      