import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.51 3c.31 0 .6.2.7.5L22.7 19a.75.75 0 01-1.42.5l-1.42-4h-7.11l-1.56 4.02a.75.75 0 11-1.4-.54l6-15.5c.11-.3.4-.48.71-.48zm-.04 2.9L13.34 14h6l-2.87-8.1z" fill={primaryFill} /><path d="M5.5 10.5l.29.01c1.96.1 3.12 1.23 3.2 3.05l.01.2v5.5c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-.1a5.6 5.6 0 01-2.75.85 3.13 3.13 0 01-3.25-3.25c0-1.72 1.19-3 3.16-3.24a7.53 7.53 0 012.84.2c-.01-1.1-.56-1.65-1.79-1.71-.96-.05-1.64.09-2.03.36a.75.75 0 11-.86-1.22 4.46 4.46 0 012.68-.65zm2 4.82l-.3-.09c-.81-.22-1.6-.28-2.36-.19-1.23.15-1.84.8-1.84 1.76 0 1.1.71 1.75 1.75 1.75.68 0 1.52-.32 2.5-.97l.25-.17v-2.09z" fill={primaryFill} /></svg>;
}

const TextChangeCase24Regular = wrapIcon(rawSvg({}), 'TextChangeCase24Regular');
export default TextChangeCase24Regular;
      