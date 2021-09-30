import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 1a6 6 0 00-5.27 8.87l-.71 2.5a.5.5 0 00.64.6L4 12.2c.46.28.97.49 1.5.62a5.5 5.5 0 017.3-7.3A6 6 0 007.01 1zm3.5 14a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.9-6.4l-.9.9h1.55A2.75 2.75 0 0113 12.25v.25a.5.5 0 01-1 0v-.25c0-.97-.78-1.75-1.75-1.75H8.71l.9.9a.5.5 0 01-.71.7l-1.76-1.75a.5.5 0 010-.7L8.9 7.9a.5.5 0 11.7.7z" fill={primaryFill} /></svg>;
}

const ChatArrowBack16Filled = wrapIcon(rawSvg({}), 'ChatArrowBack16Filled');
export default ChatArrowBack16Filled;
      