import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.18 3h.03L5.56 4.5H2V4c0-1.1.9-2 2-2h1.75a.5.5 0 01.31.11L7.18 3zm-1.1 2.37L8.7 3H12a2 2 0 012 2v1.26A5.5 5.5 0 005.2 12H4a2 2 0 01-2-2V5.5h3.75a.5.5 0 00.34-.13zM10.5 15a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM12 8v.15a3 3 0 00-3.62.48.5.5 0 00.7.7A2 2 0 0111.48 9H11a.5.5 0 000 1h1.5a.5.5 0 00.5-.5V8a.5.5 0 00-1 0zm-1.55 5.25a3 3 0 002.17-.88.5.5 0 00-.7-.7 2 2 0 01-2.39.33H10a.5.5 0 000-1H8.5a.5.5 0 00-.5.5V13a.5.5 0 001 0v-.15a3.02 3.02 0 001.45.4z" fill={primaryFill} /></svg>;
}

const FolderSync16Filled = wrapIcon(rawSvg({}), 'FolderSync16Filled');
export default FolderSync16Filled;
      