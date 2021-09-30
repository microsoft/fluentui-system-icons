import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.81 1.81A2.75 2.75 0 002 7.75v11.5A2.75 2.75 0 004.75 22h6v-1.5h-6c-.69 0-1.25-.56-1.25-1.25V7.75c0-.69.56-1.25 1.25-1.25h.69l6.31 6.31v12.44a.75.75 0 001.33.48l3.39-4.07c.05-.07.14-.1.23-.09l4.45.64 3.57 3.57a.75.75 0 001.06-1.06l-3.74-3.74-.01-.01-9-9v-.01L3.27 2.22zm9.97 12.1l6.13 6.12-2.47-.35c-.6-.09-1.2.14-1.6.6l-2.06 2.49V14.3z" fill={primaryFill} /><path d="M9.68 6.5L8.18 5h15.07A2.75 2.75 0 0126 7.75v11.5c0 .97-.5 1.82-1.26 2.31l-1.12-1.12c.51-.16.88-.63.88-1.19V7.75c0-.69-.56-1.25-1.25-1.25H9.68z" fill={primaryFill} /></svg>;
}

const CursorHoverOff28Regular = wrapIcon(rawSvg({}), 'CursorHoverOff28Regular');
export default CursorHoverOff28Regular;
      