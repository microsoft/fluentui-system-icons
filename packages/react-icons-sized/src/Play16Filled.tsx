import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.24 2.2A1.5 1.5 0 004 3.5v9a1.5 1.5 0 002.24 1.3l8-4.5a1.5 1.5 0 000-2.6l-8-4.5z" fill={primaryFill} /></svg>;
}

const Play16Filled = wrapIcon(rawSvg({}), 'Play16Filled');
export default Play16Filled;
      