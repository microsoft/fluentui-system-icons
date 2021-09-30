import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 3c.41 0 .75.34.75.75v8.24A3.72 3.72 0 0117 11c2.2 0 4 2.01 4 4.5S19.2 20 17 20c-.95 0-1.82-.37-2.5-.99v.24a.75.75 0 01-1.5 0V3.75c0-.41.34-.75.75-.75zm.75 12.5c0 1.83 1.28 3 2.5 3s2.5-1.17 2.5-3-1.28-3-2.5-3-2.5 1.17-2.5 3zm-7-5l.29.01c1.96.1 3.12 1.23 3.2 3.05l.01.2v5.5c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-.1a5.6 5.6 0 01-2.75.85 3.13 3.13 0 01-3.25-3.25c0-1.72 1.19-3 3.16-3.24a7.53 7.53 0 012.84.2c-.01-1.1-.56-1.65-1.79-1.71-.96-.05-1.64.09-2.03.36a.75.75 0 11-.86-1.22 4.46 4.46 0 012.68-.65zm2 4.82l-.3-.09c-.81-.22-1.6-.28-2.36-.19-1.23.15-1.84.8-1.84 1.76 0 1.1.71 1.75 1.75 1.75.68 0 1.52-.32 2.5-.97l.25-.17v-2.09z" fill={primaryFill} /></svg>;
}

const TextCaseLowercase24Regular = wrapIcon(rawSvg({}), 'TextCaseLowercase24Regular');
export default TextCaseLowercase24Regular;
      