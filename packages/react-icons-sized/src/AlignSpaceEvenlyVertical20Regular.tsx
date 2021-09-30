import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3c0-1.1.9-2 2-2h8a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v1a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H6zM4 15c0-1.1.9-2 2-2h8a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1zm2-1a1 1 0 00-1 1v1a1 1 0 001 1h8a1 1 0 001-1v-1a1 1 0 00-1-1H6zm0-7a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2V9a2 2 0 00-2-2H6zM5 9a1 1 0 011-1h8a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1V9z" fill={primaryFill} /></svg>;
}

const AlignSpaceEvenlyVertical20Regular = wrapIcon(rawSvg({}), 'AlignSpaceEvenlyVertical20Regular');
export default AlignSpaceEvenlyVertical20Regular;
      