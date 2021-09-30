import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11A5 5 0 106 1a5 5 0 000 10zm-.75-2.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm.26-4.84a.5.5 0 01.98 0l.01.09v2.59a.5.5 0 01-1 0V3.41z" fill={primaryFill} /></svg>;
}

const ErrorCircle12Filled = wrapIcon(rawSvg({}), 'ErrorCircle12Filled');
export default ErrorCircle12Filled;
      