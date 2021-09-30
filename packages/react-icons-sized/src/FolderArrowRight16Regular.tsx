import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5V10a1 1 0 001 1h1.02c.03.34.1.68.19 1H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h1.75a.5.5 0 01.32.11l1.1.89H12a2 2 0 012 2v1.26a5.5 5.5 0 00-1-.66V5a1 1 0 00-1-1H7.23L6.14 5.32a.5.5 0 01-.39.18H3zM5.58 3H4a1 1 0 00-1 1v.5h2.52l.77-.93L5.58 3z" fill={primaryFill} /><path d="M6.03 11a4.47 4.47 0 004.47 4 4.5 4.5 0 10-4.47-4zm4.82 1.85a.5.5 0 01-.7-.7L11.29 11H8.5a.5.5 0 010-1h2.8l-1.15-1.15a.5.5 0 01.7-.7l2 2a.5.5 0 01.15.35.5.5 0 01-.14.35l-2 2z" fill={primaryFill} /></svg>;
}

const FolderArrowRight16Regular = wrapIcon(rawSvg({}), 'FolderArrowRight16Regular');
export default FolderArrowRight16Regular;
      