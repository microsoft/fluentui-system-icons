import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.39 4.29L8.07 3.3a1.5 1.5 0 00-.9-.3H4.5A2.5 2.5 0 002 5.5v1h5.07a.5.5 0 00.36-.16L9.4 4.3z" fill={primaryFill} /><path d="M10.56 4.5l-2.4 2.53c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 004.5 17h2.26a4.5 4.5 0 013.74-7h5c.93 0 1.79.28 2.5.76V6.84a2.5 2.5 0 00-2.5-2.34h-4.94z" fill={primaryFill} /><path d="M8 14.5a2.5 2.5 0 012.5-2.5h1a.5.5 0 000-1h-1a3.5 3.5 0 100 7h1a.5.5 0 000-1h-1A2.5 2.5 0 018 14.5z" fill={primaryFill} /><path d="M18 14.5a2.5 2.5 0 00-2.5-2.5h-1a.5.5 0 010-1h1a3.5 3.5 0 110 7h-1a.5.5 0 010-1h1a2.5 2.5 0 002.5-2.5z" fill={primaryFill} /><path d="M10 14.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const FolderLink20Filled = wrapIcon(rawSvg({}), 'FolderLink20Filled');
export default FolderLink20Filled;
      