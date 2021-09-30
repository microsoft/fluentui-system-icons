import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 4h10.5A2.75 2.75 0 0120 6.58v3.52a2.75 2.75 0 012 2.46v7.69a.75.75 0 01-1.5.1V18h-17v2.25c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-7.5c0-1.26.85-2.32 2-2.65V6.75a2.75 2.75 0 012.58-2.74L6.75 4zm12.5 7.5H4.75c-.65 0-1.18.5-1.24 1.12l-.01.13v3.75h17v-3.75c0-.65-.5-1.18-1.12-1.24l-.13-.01zm-2-6H6.75c-.65 0-1.18.5-1.24 1.12l-.01.13V10H7a1 1 0 011-1h2a1 1 0 011 .88V10h2a1 1 0 011-1h2a1 1 0 011 .88V10h1.5V6.75c0-.65-.5-1.18-1.12-1.24l-.13-.01z" fill={primaryFill} /></svg>;
}

const Bed24Regular = wrapIcon(rawSvg({}), 'Bed24Regular');
export default Bed24Regular;
      