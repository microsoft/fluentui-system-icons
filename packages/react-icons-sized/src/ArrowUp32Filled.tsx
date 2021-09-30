import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 29c-.69 0-1.25-.56-1.25-1.25V7.21l-7.63 7.44a1.25 1.25 0 11-1.74-1.8l9.74-9.5a1.25 1.25 0 011.76 0l9.74 9.5a1.25 1.25 0 11-1.74 1.8L17.25 7.2v20.54c0 .69-.56 1.25-1.25 1.25z" fill={primaryFill} /></svg>;
}

const ArrowUp32Filled = wrapIcon(rawSvg({}), 'ArrowUp32Filled');
export default ArrowUp32Filled;
      