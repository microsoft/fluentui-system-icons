import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3a1 1 0 011-1h4v5H8V3zM3 8a1 1 0 00-1 1v3a1 1 0 001 1h4V8H3zm10 0H8v5h4a1 1 0 001-1V8zm5-6h-4v5h4a1 1 0 001-1V3a1 1 0 00-1-1zM4 17a1 1 0 011-1h4v5H5a1 1 0 01-1-1v-3zm11-1h-5v5h5v-5zm1 0h5v4a1 1 0 01-1 1h-4v-5zm1-6a1 1 0 00-1 1v4h5v-4a1 1 0 00-1-1h-3z" fill={primaryFill} /></svg>;
}

const TetrisApp24Filled = wrapIcon(rawSvg({}), 'TetrisApp24Filled');
export default TetrisApp24Filled;
      