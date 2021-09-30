import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4h-.35L6.1 6.37a.5.5 0 01-.34.13H2V11c0 1.1.9 2 2 2h6v-2h-.5a.5.5 0 010-1h.5V9h-.5a.5.5 0 010-1h.5V7h-.5a.5.5 0 01-.5-.5V4z" fill={primaryFill} /><path d="M11 13h1a2 2 0 002-2V6a2 2 0 00-2-2v2.5a.5.5 0 01-.5.5H11v2h.5a.5.5 0 110 1H11v3z" fill={primaryFill} /><path d="M10 4h1v2h-1V4z" fill={primaryFill} /><path d="M2 5.5V5c0-1.1.9-2 2-2h1.75a.5.5 0 01.32.11l1.1.89h.01L5.56 5.5H2z" fill={primaryFill} /></svg>;
}

const FolderZip16Filled = wrapIcon(rawSvg({}), 'FolderZip16Filled');
export default FolderZip16Filled;
      