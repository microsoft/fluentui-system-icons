import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a10 10 0 10-18.89 4.6l-1.06 3.82a1.25 1.25 0 001.54 1.54l3.82-1.07a9.96 9.96 0 005.37 1.08 6.52 6.52 0 01-1.05-1.47 8.45 8.45 0 01-3.86-1.07l-.27-.15-3.99 1.11 1.11-3.98-.15-.27a8.5 8.5 0 1115.92-4.4c.55.27 1.04.63 1.48 1.04L22 12zm-9.16 4.47a2 2 0 001.44-2.5l-.2-.68c.44-.38.94-.7 1.48-.91l.5.52a2 2 0 002.9 0l.5-.52c.54.23 1.04.54 1.48.93l-.19.63a2 2 0 001.45 2.5l.54.14a5.73 5.73 0 010 1.8l-.58.15a2 2 0 00-1.44 2.5l.2.68c-.44.38-.94.7-1.48.91l-.5-.52a2 2 0 00-2.9 0l-.5.52a5.28 5.28 0 01-1.48-.92l.19-.64a2 2 0 00-1.45-2.5l-.54-.14a5.72 5.72 0 010-1.8l.58-.15zm6.11 1.03c0-.83-.65-1.5-1.45-1.5-.8 0-1.45.67-1.45 1.5S16.7 19 17.5 19c.8 0 1.45-.67 1.45-1.5z" fill={primaryFill} /></svg>;
}

const ChatSettings24Regular = wrapIcon(rawSvg({}), 'ChatSettings24Regular');
export default ChatSettings24Regular;
      