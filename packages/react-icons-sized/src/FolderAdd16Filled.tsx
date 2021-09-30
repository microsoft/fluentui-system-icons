import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.2 3h-.02l-1.12-.89A.5.5 0 005.75 2H4a2 2 0 00-2 2v.5h3.56L7.2 3zm1.5 0L6.08 5.37a.5.5 0 01-.34.13H2V10c0 1.1.9 2 2 2h1.2A5.5 5.5 0 0114 6.26V5a2 2 0 00-2-2H8.7zm1.8 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V10h1.5a.5.5 0 010 1H11v1.5a.5.5 0 01-1 0V11H8.5a.5.5 0 010-1H10V8.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const FolderAdd16Filled = wrapIcon(rawSvg({}), 'FolderAdd16Filled');
export default FolderAdd16Filled;
      