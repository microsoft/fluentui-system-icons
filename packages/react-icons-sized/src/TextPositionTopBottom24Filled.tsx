import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 4.75a1 1 0 011-1h16.5a1 1 0 110 2H3.75a1 1 0 01-1-1z" fill={primaryFill} /><path d="M2.75 18.75a1 1 0 011-1h16.5a1 1 0 110 2H3.75a1 1 0 01-1-1z" fill={primaryFill} /><path d="M9.75 11a2.25 2.25 0 014.5 0v4.75a1 1 0 102 0V11a4.25 4.25 0 00-8.5 0v4.75a1 1 0 102 0V11z" fill={primaryFill} /></svg>;
}

const TextPositionTopBottom24Filled = wrapIcon(rawSvg({}), 'TextPositionTopBottom24Filled');
export default TextPositionTopBottom24Filled;
      