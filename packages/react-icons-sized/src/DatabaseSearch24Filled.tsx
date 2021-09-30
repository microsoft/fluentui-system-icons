import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 10c4.42 0 8-1.8 8-4s-3.58-4-8-4-8 1.8-8 4 3.58 4 8 4zm6.33.17c.59-.3 1.17-.67 1.67-1.12v3.2a5.48 5.48 0 00-4.02-1.23c.86-.21 1.65-.5 2.35-.85zM11 16.5a5.5 5.5 0 003.83 5.24c-.88.17-1.83.26-2.83.26-4.42 0-8-1.8-8-4V9.05c.5.45 1.08.83 1.67 1.12 1.7.85 3.94 1.33 6.33 1.33.96 0 1.9-.08 2.78-.22A5.5 5.5 0 0011 16.5zm5.5 4.5c.97 0 1.87-.3 2.6-.83l2.62 2.61a.75.75 0 101.06-1.06l-2.61-2.61A4.5 4.5 0 1016.5 21zm0-1.5a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /></svg>;
}

const DatabaseSearch24Filled = wrapIcon(rawSvg({}), 'DatabaseSearch24Filled');
export default DatabaseSearch24Filled;
      