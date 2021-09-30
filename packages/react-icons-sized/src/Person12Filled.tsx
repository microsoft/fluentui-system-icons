import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /><path d="M8.5 6h-5C2.67 6 2 6.67 2 7.5c0 1.12.46 2.01 1.21 2.61.74.6 1.74.89 2.79.89s2.05-.29 2.79-.89C9.54 9.51 10 8.61 10 7.5 10 6.67 9.33 6 8.5 6z" fill={primaryFill} /></svg>;
}

const Person12Filled = wrapIcon(rawSvg({}), 'Person12Filled');
export default Person12Filled;
      