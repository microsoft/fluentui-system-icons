import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.75c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 013 3.75zm-2 4c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H1.75A.75.75 0 011 7.75zm4 4c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextAlignCenter16Filled = wrapIcon(rawSvg({}), 'TextAlignCenter16Filled');
export default TextAlignCenter16Filled;
      