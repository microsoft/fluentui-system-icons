import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 7c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3A.5.5 0 016 7z" fill={primaryFill} /><path d="M6.5 8.5a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M2 8a6 6 0 113 5.2l-2.34.77a.5.5 0 01-.64-.6l.71-2.5A5.98 5.98 0 012 8zm6-5a5 5 0 00-4.3 7.55.5.5 0 01.05.4l-.5 1.78 1.65-.56a.5.5 0 01.43.06A5 5 0 108 3z" fill={primaryFill} /></svg>;
}

const Chat16Regular = wrapIcon(rawSvg({}), 'Chat16Regular');
export default Chat16Regular;
      