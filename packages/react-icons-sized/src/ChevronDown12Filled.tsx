import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.22 4.47c.3-.3.77-.3 1.06 0L6 7.19l2.72-2.72a.75.75 0 011.06 1.06L6.53 8.78c-.3.3-.77.3-1.06 0L2.22 5.53a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const ChevronDown12Filled = wrapIcon(rawSvg({}), 'ChevronDown12Filled');
export default ChevronDown12Filled;
      