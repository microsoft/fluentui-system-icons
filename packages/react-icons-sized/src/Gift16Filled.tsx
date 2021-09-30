import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 5H7v3H3a1 1 0 01-1-1V6a1 1 0 011-1h1.27A2 2 0 017.5 2.68 2 2 0 0110.73 5H12a1 1 0 011 1v1a1 1 0 01-1 1H8V5zM5 4a1 1 0 001 1h1V4a1 1 0 00-2 0zm3 1h1a1 1 0 10-1-1v1zm4 4H8v5h2a2 2 0 002-2V9zm-5 5V9H3v3c0 1.1.9 2 2 2h2z" fill={primaryFill} /></svg>;
}

const Gift16Filled = wrapIcon(rawSvg({}), 'Gift16Filled');
export default Gift16Filled;
      