import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.86 12.9a4.98 4.98 0 005.25.63l2.3.46a.5.5 0 00.58-.59l-.46-2.29a4.98 4.98 0 00-.64-5.25 6.04 6.04 0 010 2.24 4.01 4.01 0 01-.33 2.72.5.5 0 00-.04.32l.34 1.72-1.72-.34a.5.5 0 00-.32.04 3.98 3.98 0 01-2.72.34 6.03 6.03 0 01-2.24 0zM2 7a5 5 0 112.89 4.53l-2.3.46a.5.5 0 01-.58-.59l.46-2.29A4.98 4.98 0 012 7zm5 1.88a.62.62 0 100 1.25.62.62 0 000-1.25zM7 4c-1.05 0-1.86.82-1.85 1.96a.5.5 0 101-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 001 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32C8.85 4.85 8.03 4 7 4z" fill={primaryFill} /></svg>;
}

const ChatBubblesQuestion16Filled = wrapIcon(rawSvg({}), 'ChatBubblesQuestion16Filled');
export default ChatBubblesQuestion16Filled;
      