import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 20.5a.5.5 0 00.5-.5V10H14a2 2 0 01-2-2V3.5H6a.5.5 0 00-.5.5v10h-.75c-.26 0-.5.02-.75.06V4c0-1.1.9-2 2-2h6.17a.6.6 0 01.08 0l.06.01c.22.02.43.06.63.14l.16.09c.02 0 .04.02.05.03l.05.02.08.05a2.07 2.07 0 01.3.25l5.83 5.82A2 2 0 0120 9.83V20a2 2 0 01-2 2h-6.29c.41-.43.74-.94.96-1.5H18zm-.62-12L13.5 4.62V8c0 .28.22.5.5.5h3.38zm-7.6 5.75c.85.29 1.6.82 2.15 1.5h3.32a.75.75 0 000-1.5H9.77zM12.66 17c.18.47.3.97.32 1.5h2.26a.75.75 0 000-1.5h-2.58zm-3.92-5.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zM12 18.75A3.75 3.75 0 008.25 15h-.1a.75.75 0 00.1 1.5h.15a2.25 2.25 0 01-.15 4.5l-.1.01a.75.75 0 00.1 1.5v-.01h.2A3.75 3.75 0 0012 18.74zm-6.5-3a.75.75 0 00-.75-.75h-.2a3.75 3.75 0 00.2 7.5h.1a.75.75 0 00-.1-1.5H4.6a2.25 2.25 0 01.15-4.5h.1a.75.75 0 00.65-.75zm3.5 3a.75.75 0 00-.75-.75h-3.6a.75.75 0 00.1 1.5h3.6a.75.75 0 00.65-.75z" fill={primaryFill} /></svg>;
}

const DocumentTextLink24Regular = wrapIcon(rawSvg({}), 'DocumentTextLink24Regular');
export default DocumentTextLink24Regular;
      