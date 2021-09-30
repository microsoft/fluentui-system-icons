import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M41.87 43.63L34.22 36H32.5a6.5 6.5 0 01-6.5-6.5v-1.72L23.24 25H22v4.48a6.5 6.5 0 01-6.5 6.5h-5A6.5 6.5 0 014 29.5v-7c0-1.11.41-2.14 1.1-2.93l.07-.11.09-.1 5.9-6.43-6.8-6.79a1.25 1.25 0 111.77-1.76l37.5 37.5a1.25 1.25 0 01-1.76 1.76zm-28.6-28.58L10.58 18h5.66l-2.95-2.95zM8.5 21c-.83 0-1.5.67-1.5 1.5v7a3.5 3.5 0 003.5 3.5h5a3.5 3.5 0 003.5-3.5v-7c0-.83-.67-1.5-1.5-1.5h-9z" fill={primaryFill} /><path d="M26.27 20.96L29 23.7v-1.2c0-.83.67-1.5 1.5-1.5h9c.83 0 1.5.67 1.5 1.5v7a3.5 3.5 0 01-2.78 3.42l2.32 2.32A6.5 6.5 0 0044 29.49v-7c0-1.05-.37-2.02-.98-2.8a1.5 1.5 0 00-.24-.35l-7.29-7.9-.26-.26A4.5 4.5 0 0032.19 10h-2.7l-.2.01a1.5 1.5 0 00.2 2.99h2.7l.2.01c.34.05.66.22.9.47L37.45 18H30.5a4.5 4.5 0 00-4.23 2.96z" fill={primaryFill} /><path d="M18.3 13l-2.97-2.97.11-.01.38-.02h2.68a1.5 1.5 0 01.2 2.99l-.2.01h-.2z" fill={primaryFill} /></svg>;
}

const GlassesOff48Regular = wrapIcon(rawSvg({}), 'GlassesOff48Regular');
export default GlassesOff48Regular;
      