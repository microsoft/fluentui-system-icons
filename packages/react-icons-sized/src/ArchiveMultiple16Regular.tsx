import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6a.5.5 0 000 1h2a.5.5 0 000-1H6zM2 1a1 1 0 00-1 1v2a1 1 0 001 1v6c0 1.1.9 2 2 2h6a2 2 0 002-2V5a1 1 0 001-1V2a1 1 0 00-1-1H2zm1 10V5h8v6a1 1 0 01-1 1H4a1 1 0 01-1-1zM2 2h10v2H2V2zm12 4.5c0-.65-.42-1.2-1-1.41V12a2 2 0 01-2 2H4.27c.34.6.99 1 1.73 1h5a3 3 0 003-3V6.5z" fill={primaryFill} /></svg>;
}

const ArchiveMultiple16Regular = wrapIcon(rawSvg({}), 'ArchiveMultiple16Regular');
export default ArchiveMultiple16Regular;
      