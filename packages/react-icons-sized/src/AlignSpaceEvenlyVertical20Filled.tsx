import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2V3a2 2 0 00-2-2H6zm0 12a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2v-1a2 2 0 00-2-2H6zm0-6a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2V9a2 2 0 00-2-2H6z" fill={primaryFill} /></svg>;
}

const AlignSpaceEvenlyVertical20Filled = wrapIcon(rawSvg({}), 'AlignSpaceEvenlyVertical20Filled');
export default AlignSpaceEvenlyVertical20Filled;
      