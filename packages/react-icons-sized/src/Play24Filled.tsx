import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5.27c0-1.7 1.83-2.79 3.33-1.97l12.36 6.72a2.25 2.25 0 010 3.96L8.33 20.7A2.25 2.25 0 015 18.73V5.27z" fill={primaryFill} /></svg>;
}

const Play24Filled = wrapIcon(rawSvg({}), 'Play24Filled');
export default Play24Filled;
      