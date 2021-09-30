import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5.5A2.5 2.5 0 013.5 3h9A2.5 2.5 0 0115 5.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5v-5zm4 0v1a.5.5 0 001 0V6h1.5v4H7a.5.5 0 000 1h2a.5.5 0 000-1h-.5V6H10v.5a.5.5 0 001 0v-1a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const TextField16Filled = wrapIcon(rawSvg({}), 'TextField16Filled');
export default TextField16Filled;
      