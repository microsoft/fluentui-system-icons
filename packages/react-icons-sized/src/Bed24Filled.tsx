import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 11A2.75 2.75 0 0122 13.58v6.67a.75.75 0 01-1.5.1V18h-17v2.25c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-6.5a2.75 2.75 0 012.58-2.74l.17-.01h14.5zM6.75 4h10.5A2.75 2.75 0 0120 6.58V10h-3v-.12a1 1 0 00-.88-.87L16 9h-2a1 1 0 00-1 .88V10h-2v-.12a1 1 0 00-.88-.87L10 9H8a1 1 0 00-1 .88V10H4V6.75a2.75 2.75 0 012.58-2.74L6.75 4z" fill={primaryFill} /></svg>;
}

const Bed24Filled = wrapIcon(rawSvg({}), 'Bed24Filled');
export default Bed24Filled;
      