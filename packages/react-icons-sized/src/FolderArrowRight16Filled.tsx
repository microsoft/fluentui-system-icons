import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.18 3l-1.11-.89A.5.5 0 005.75 2H4a2 2 0 00-2 2v.5h3.56L7.18 3z" fill={primaryFill} /><path d="M2 5.5V10c0 1.1.9 2 2 2h1.2A5.5 5.5 0 0114 6.26V5a2 2 0 00-2-2H8.65L6.1 5.37a.5.5 0 01-.34.13H2z" fill={primaryFill} /><path d="M14 7.67a4.5 4.5 0 00-8 2.83 4.5 4.5 0 108-2.83zm-3.15 5.18a.5.5 0 01-.7-.7L11.29 11H8.5a.5.5 0 010-1h2.8l-1.15-1.15a.5.5 0 01.7-.7l2 2a.5.5 0 01.15.35.5.5 0 01-.14.35l-2 2z" fill={primaryFill} /></svg>;
}

const FolderArrowRight16Filled = wrapIcon(rawSvg({}), 'FolderArrowRight16Filled');
export default FolderArrowRight16Filled;
      