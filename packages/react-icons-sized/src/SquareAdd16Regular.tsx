import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v1.76a5.5 5.5 0 00-1-.66V4.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5v7c0 .83.67 1.5 1.5 1.5h1.1c.18.36.4.7.66 1H4.5A2.5 2.5 0 012 11.5v-7zm13 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V10H8.5a.5.5 0 000 1H10v1.5a.5.5 0 001 0V11h1.5a.5.5 0 000-1H11V8.5z" fill={primaryFill} /></svg>;
}

const SquareAdd16Regular = wrapIcon(rawSvg({}), 'SquareAdd16Regular');
export default SquareAdd16Regular;
      