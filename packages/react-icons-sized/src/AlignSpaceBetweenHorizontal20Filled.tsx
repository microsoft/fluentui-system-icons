import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V6a2 2 0 00-2-2H3zm13 0a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V6a2 2 0 00-2-2h-1z" fill={primaryFill} /></svg>;
}

const AlignSpaceBetweenHorizontal20Filled = wrapIcon(rawSvg({}), 'AlignSpaceBetweenHorizontal20Filled');
export default AlignSpaceBetweenHorizontal20Filled;
      