import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5v6c0 1.1.9 2 2 2h8a2 2 0 002-2V6a2 2 0 00-2-2H7.18l-1.12-.89A.5.5 0 005.75 3H4a2 2 0 00-2 2zm1 0a1 1 0 011-1h1.57l.87.7-.88.8H3V5zm4.6 0H12a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V6.5h2.75a.5.5 0 00.34-.13L7.59 5z" fill={primaryFill} /></svg>;
}

const Folder16Regular = wrapIcon(rawSvg({}), 'Folder16Regular');
export default Folder16Regular;
      