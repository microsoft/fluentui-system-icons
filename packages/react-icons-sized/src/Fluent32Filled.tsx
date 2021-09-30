import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.55 2.1a1 1 0 01.9 0l8 4a1 1 0 010 1.8L19.24 11l6.2 3.1a1 1 0 010 1.8L18 19.61V29a1 1 0 01-1.49.87l-8-4.5A1 1 0 018 24.5V7a1 1 0 01.55-.9l8-4z" fill={primaryFill} /></svg>;
}

const Fluent32Filled = wrapIcon(rawSvg({}), 'Fluent32Filled');
export default Fluent32Filled;
      