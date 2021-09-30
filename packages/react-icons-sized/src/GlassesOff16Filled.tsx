import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.28 12l2.87 2.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L3.7 4.42 1.54 6.34c-.33.28-.54.7-.54 1.16v2A2.5 2.5 0 003.5 12h1A2.5 2.5 0 007 9.5V9h1.3l.7.72a2.5 2.5 0 002.28 2.27zM5.3 6H3.44l.98-.87.87.87z" fill={primaryFill} /><path d="M13.77 11.65L9.1 6.97A1.5 1.5 0 0110.5 6h2.06l-2.25-2H9.5a.5.5 0 110-1h1a.5.5 0 01.33.13l3.63 3.21c.33.28.54.7.54 1.16v2c0 .92-.5 1.72-1.23 2.15z" fill={primaryFill} /><path d="M5.21 3.1l.91.9h.38a.5.5 0 100-1h-1a.5.5 0 00-.29.1z" fill={primaryFill} /></svg>;
}

const GlassesOff16Filled = wrapIcon(rawSvg({}), 'GlassesOff16Filled');
export default GlassesOff16Filled;
      