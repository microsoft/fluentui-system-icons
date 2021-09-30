import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.56 32.06a1.5 1.5 0 01-2.12 0L24 18.62 10.56 32.06a1.5 1.5 0 01-2.12-2.12l14.5-14.5a1.5 1.5 0 012.12 0l14.5 14.5a1.5 1.5 0 010 2.12z" fill={primaryFill} /></svg>;
}

const ChevronUp48Filled = wrapIcon(rawSvg({}), 'ChevronUp48Filled');
export default ChevronUp48Filled;
      