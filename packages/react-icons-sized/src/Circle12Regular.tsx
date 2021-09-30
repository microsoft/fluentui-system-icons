import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a4 4 0 100 8 4 4 0 000-8zM1 6a5 5 0 1110 0A5 5 0 011 6z" fill={primaryFill} /></svg>;
}

const Circle12Regular = wrapIcon(rawSvg({}), 'Circle12Regular');
export default Circle12Regular;
      