import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 16a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1zm6 0a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1zm6 0a2 2 0 002-2V6a2 2 0 00-2-2h-1a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1z" fill={primaryFill} /></svg>;
}

const AlignSpaceEvenlyHorizontal20Filled = wrapIcon(rawSvg({}), 'AlignSpaceEvenlyHorizontal20Filled');
export default AlignSpaceEvenlyHorizontal20Filled;
      