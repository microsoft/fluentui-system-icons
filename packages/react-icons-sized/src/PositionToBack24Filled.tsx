import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11h1.25A3.75 3.75 0 0011 7.25V6h3.75C16.55 6 18 7.46 18 9.25V13h-1.25A3.75 3.75 0 0013 16.75V18H9.25A3.25 3.25 0 016 14.75V11z" fill={primaryFill} /><path d="M1 3.75A2.75 2.75 0 013.75 1h3.5A2.75 2.75 0 0110 3.75v3.5A2.75 2.75 0 017.25 10h-3.5A2.75 2.75 0 011 7.25v-3.5zM3.75 2.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5z" fill={primaryFill} /><path d="M14 16.75A2.75 2.75 0 0116.75 14h3.5A2.75 2.75 0 0123 16.75v3.5A2.75 2.75 0 0120.25 23h-3.5A2.75 2.75 0 0114 20.25v-3.5zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5z" fill={primaryFill} /></svg>;
}

const PositionToBack24Filled = wrapIcon(rawSvg({}), 'PositionToBack24Filled');
export default PositionToBack24Filled;
      