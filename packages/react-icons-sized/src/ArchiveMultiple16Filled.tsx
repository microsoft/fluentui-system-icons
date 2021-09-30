import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 1a1 1 0 00-1 1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H2zm0 4v6c0 1.1.9 2 2 2h6a2 2 0 002-2V5H2zm3.5 1.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM13 5.09c.58.2 1 .76 1 1.41V12a3 3 0 01-3 3H6a2 2 0 01-1.73-1H11a2 2 0 002-2V5.09z" fill={primaryFill} /></svg>;
}

const ArchiveMultiple16Filled = wrapIcon(rawSvg({}), 'ArchiveMultiple16Filled');
export default ArchiveMultiple16Filled;
      