import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M3 13a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M9.3 18.3a1 1 0 101.4 1.4l1.3-1.29 1.3 1.3a1 1 0 001.4-1.42l-2-2a1 1 0 00-1.4 0l-2 2z" fill={primaryFill} /></svg>;
}

const TextAddSpaceAfter24Filled = wrapIcon(rawSvg({}), 'TextAddSpaceAfter24Filled');
export default TextAddSpaceAfter24Filled;
      