import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.28 12l2.87 2.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L3.7 4.42 1.55 6.34C1.2 6.62 1 7.04 1 7.5v2A2.5 2.5 0 003.5 12h1A2.5 2.5 0 007 9.5V9h1.3l.7.72a2.5 2.5 0 002.28 2.27zM5.3 6H3.44l.98-.87.87.87zM2.17 7.12l.02-.01A.5.5 0 012.5 7h3c.28 0 .5.22.5.5v2c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 012 9.5v-2a.5.5 0 01.17-.38z" fill={primaryFill} /><path d="M10 7.88l-.9-.9A1.5 1.5 0 0110.5 6h2.06l-2.25-2H9.5a.5.5 0 010-1h1a.5.5 0 01.33.13l3.62 3.21c.34.28.55.7.55 1.16v2c0 .92-.5 1.72-1.23 2.15l-.74-.75c.57-.2.97-.76.97-1.4v-2a.5.5 0 00-.17-.38l-.02-.01A.5.5 0 0013.5 7h-3a.5.5 0 00-.5.5v.38z" fill={primaryFill} /><path d="M5.21 3.1l.91.9h.38a.5.5 0 000-1h-1a.5.5 0 00-.29.1z" fill={primaryFill} /></svg>;
}

const GlassesOff16Regular = wrapIcon(rawSvg({}), 'GlassesOff16Regular');
export default GlassesOff16Regular;
      