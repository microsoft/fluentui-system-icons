import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8V2H6a2 2 0 00-2 2v10.06c.24-.04.5-.06.75-.06h3.5c.53 0 1.05.09 1.52.25h5.98a.75.75 0 010 1.5h-3.82c.3.37.56.8.74 1.25h3.08a.75.75 0 010 1.5h-2.76a4.82 4.82 0 01-1.28 3.5H18a2 2 0 002-2V10h-6a2 2 0 01-2-2zm-3.75 3.5h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5zM13.5 8V2.5l6 6H14a.5.5 0 01-.5-.5zM12 18.75A3.75 3.75 0 008.25 15h-.1a.75.75 0 00.1 1.5h.15a2.25 2.25 0 01-.15 4.5l-.1.01a.75.75 0 00.1 1.5v-.01h.2A3.75 3.75 0 0012 18.74zm-6.5-3a.75.75 0 00-.75-.75h-.2a3.75 3.75 0 00.2 7.5h.1a.75.75 0 00-.1-1.5H4.6a2.25 2.25 0 01.15-4.5h.1a.75.75 0 00.65-.75zm3.5 3a.75.75 0 00-.75-.75h-3.6a.75.75 0 00.1 1.5h3.6a.75.75 0 00.65-.75z" fill={primaryFill} /></svg>;
}

const DocumentTextLink24Filled = wrapIcon(rawSvg({}), 'DocumentTextLink24Filled');
export default DocumentTextLink24Filled;
      