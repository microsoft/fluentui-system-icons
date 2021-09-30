import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4v6c0 1.1.9 2 2 2h1.2c-.08-.32-.15-.66-.18-1H4a1 1 0 01-1-1V5.5h2.75a.5.5 0 00.34-.13L7.59 4H12a1 1 0 011 1v.6c.36.18.7.4 1 .66V5a2 2 0 00-2-2H7.18l-1.12-.89A.5.5 0 005.75 2H4a2 2 0 00-2 2zm1 0a1 1 0 011-1h1.57l.87.7-.88.8H3V4zm7.5 11a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V10h1.5a.5.5 0 010 1H11v1.5a.5.5 0 01-1 0V11H8.5a.5.5 0 010-1H10V8.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const FolderAdd16Regular = wrapIcon(rawSvg({}), 'FolderAdd16Regular');
export default FolderAdd16Regular;
      