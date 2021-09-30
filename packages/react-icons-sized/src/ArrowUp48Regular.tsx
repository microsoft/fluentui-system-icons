import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 44c-.69 0-1.25-.56-1.25-1.25V10.3l-12.6 12.83a1.25 1.25 0 11-1.8-1.76L23.1 6.4l.02-.03a1.25 1.25 0 011.8.04l14.72 14.97a1.25 1.25 0 11-1.78 1.76L25.25 10.3v32.45c0 .69-.56 1.25-1.25 1.25z" fill={primaryFill} /></svg>;
}

const ArrowUp48Regular = wrapIcon(rawSvg({}), 'ArrowUp48Regular');
export default ArrowUp48Regular;
      