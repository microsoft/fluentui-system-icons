import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.18 3h.03L5.56 4.5H2V4c0-1.1.9-2 2-2h1.75a.5.5 0 01.31.11L7.18 3zm-1.1 2.37L8.7 3H12a2 2 0 012 2v1.26A5.5 5.5 0 005.2 12H4a2 2 0 01-2-2V5.5h3.75a.5.5 0 00.34-.13zM10.5 15a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm-2.8-2.4l4.9-4.9a3.5 3.5 0 00-4.9 4.9zm.7.7a3.5 3.5 0 004.9-4.9l-4.9 4.9z" fill={primaryFill} /></svg>;
}

const FolderProhibited16Filled = wrapIcon(rawSvg({}), 'FolderProhibited16Filled');
export default FolderProhibited16Filled;
      