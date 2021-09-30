import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M40.25 12.5c2 0 3.64 1.57 3.74 3.55l.01.2v7.37A13 13 0 0023.46 39H7.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2V19H18.03c.97-.07 1.89-.5 2.55-1.23l.14-.17 4.11-5.1h15.42z" fill={primaryFill} /><path d="M17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.44 2.14-3.2 3.96-.09.1c-.2.2-.46.33-.74.36l-.14.01H4v-3.75c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31z" fill={primaryFill} /><path d="M46 33a11 11 0 11-22 0 11 11 0 0122 0zm-11-8a1 1 0 00-.7.3l-5 5a1 1 0 001.4 1.4l3.3-3.29V40a1 1 0 102 0V28.41l3.3 3.3a1 1 0 001.4-1.42l-5-5A1 1 0 0035 25z" fill={primaryFill} /></svg>;
}

const FolderArrowUp48Filled = wrapIcon(rawSvg({}), 'FolderArrowUp48Filled');
export default FolderArrowUp48Filled;
      