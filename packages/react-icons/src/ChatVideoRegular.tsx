import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8a1 1 0 011-1h3a1 1 0 011 1v4a1 1 0 01-1 1H7a1 1 0 01-1-1V8zm6 1l1.15-1.15a.5.5 0 01.85.36v3.58a.5.5 0 01-.85.36L12 11V9zm-2-7a8 8 0 11-3.61 15.14l-.12-.07-3.65.92a.5.5 0 01-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 01-.83-2.9l-.02-.37L2 10a8 8 0 018-8zm0 1a7 7 0 00-6.1 10.42.5.5 0 01.06.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 01.19-.01l.09.02.09.04A7 7 0 1010 3z" fill={primaryFill} /></svg>;
}

const ChatVideoRegular = wrapIcon(rawSvg({}), 'ChatVideoRegular');
export default ChatVideoRegular;
      