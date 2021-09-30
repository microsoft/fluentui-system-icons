import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 5a1 1 0 011-1h12.5a1 1 0 011 1v2a1 1 0 11-2 0V6H13v12h1a1 1 0 110 2h-4a1 1 0 110-2h1V6H6.75v1a1 1 0 01-2 0V5z" fill={primaryFill} /></svg>;
}

const Text24Filled = wrapIcon(rawSvg({}), 'Text24Filled');
export default Text24Filled;
      