import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.9 2.78a2.25 2.25 0 012.98.74l.09.14 7.76 14A2.25 2.25 0 0119.9 21H4.24a2.25 2.25 0 01-2.04-3.19l.07-.14 7.76-14.01c.2-.37.5-.67.88-.88zM12 16a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 00-1 .88v5.24a1 1 0 002 0V8.88A1 1 0 0012 8z" fill={primaryFill} /></svg>;
}

const Warning24Filled = wrapIcon(rawSvg({}), 'Warning24Filled');
export default Warning24Filled;
      