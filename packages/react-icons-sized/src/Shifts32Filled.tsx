import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 9a5 5 0 015-5h14a5 5 0 015 5v14a5 5 0 01-5 5H9a5 5 0 01-5-5V9zm12 0a1 1 0 00-2 0v8a1 1 0 001 1h6a1 1 0 000-2h-5V9z" fill={primaryFill} /></svg>;
}

const Shifts32Filled = wrapIcon(rawSvg({}), 'Shifts32Filled');
export default Shifts32Filled;
      