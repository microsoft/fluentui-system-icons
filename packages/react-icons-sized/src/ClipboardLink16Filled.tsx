import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.09 2c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h.59c.83 0 1.5.67 1.5 1.5V7H8.5a4.5 4.5 0 00-2.83 8H3.5A1.5 1.5 0 012 13.5v-10C2 2.67 2.67 2 3.5 2h.59zM5.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /><path d="M15 11.5A3.5 3.5 0 0011.5 8h-.09a.5.5 0 00.09 1h.16a2.5 2.5 0 01-.16 5l-.1.01a.5.5 0 00.1 1V15h.2a3.5 3.5 0 003.3-3.5z" fill={primaryFill} /><path d="M9 8.5a.5.5 0 00-.5-.5h-.2a3.5 3.5 0 00.2 7h.09a.5.5 0 00-.09-1h-.16a2.5 2.5 0 01.16-5h.09A.5.5 0 009 8.5z" fill={primaryFill} /><path d="M11.5 11H8.41a.5.5 0 00.09 1h3.09a.5.5 0 00-.09-1z" fill={primaryFill} /></svg>;
}

const ClipboardLink16Filled = wrapIcon(rawSvg({}), 'ClipboardLink16Filled');
export default ClipboardLink16Filled;
      