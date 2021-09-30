import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 17c0-1.1.9-2 2-2h12a2 2 0 012 2v2.5a2 2 0 01-2 2h-12a2 2 0 01-2-2V17z" fill={primaryFill} /></svg>;
}

const TextColorAccent24Filled = wrapIcon(rawSvg({}), 'TextColorAccent24Filled');
export default TextColorAccent24Filled;
      