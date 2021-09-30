import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.41V21a1 1 0 11-2 0V5.41l-.3.3a1 1 0 11-1.4-1.42l2-2a1 1 0 011.4 0l2 2a1 1 0 01-1.4 1.42l-.3-.3zM5 18.6l-.3-.3a1 1 0 00-1.4 1.42l2 2a1 1 0 001.4 0l2-2a1 1 0 10-1.4-1.42l-.3.3V3a1 1 0 10-2 0v15.59zM13 3a1 1 0 10-2 0v18a1 1 0 102 0V3z" fill={primaryFill} /></svg>;
}

const TextAlignDistributedVertical24Filled = wrapIcon(rawSvg({}), 'TextAlignDistributedVertical24Filled');
export default TextAlignDistributedVertical24Filled;
      