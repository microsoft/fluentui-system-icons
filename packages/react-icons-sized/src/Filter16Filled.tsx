import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.75 3.75c0-.41.34-.75.75-.75h11a.75.75 0 010 1.5h-11a.75.75 0 01-.75-.75zm2 4c0-.41.34-.75.75-.75h7a.75.75 0 010 1.5h-7a.75.75 0 01-.75-.75zm2 4c0-.41.34-.75.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Filter16Filled = wrapIcon(rawSvg({}), 'Filter16Filled');
export default Filter16Filled;
      