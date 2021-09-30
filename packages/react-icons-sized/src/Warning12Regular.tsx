import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zM6 6.75a.75.75 0 100 1.5.75.75 0 000-1.5zm-.79-5.3a.9.9 0 011.58 0l4.09 7.18a.92.92 0 01-.79 1.37H1.91a.92.92 0 01-.79-1.37l4.1-7.17zm.79.67L2.08 8.98h7.84L6 2.12z" fill={primaryFill} /></svg>;
}

const Warning12Regular = wrapIcon(rawSvg({}), 'Warning12Regular');
export default Warning12Regular;
      