import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.44 15.94a1.5 1.5 0 012.12 0L24 29.38l13.44-13.44a1.5 1.5 0 012.12 2.12l-14.5 14.5a1.5 1.5 0 01-2.12 0l-14.5-14.5a1.5 1.5 0 010-2.12z" fill={primaryFill} /></svg>;
}

const ChevronDown48Filled = wrapIcon(rawSvg({}), 'ChevronDown48Filled');
export default ChevronDown48Filled;
      