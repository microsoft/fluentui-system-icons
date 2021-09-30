import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.7L2.15 2.86a.5.5 0 11.7-.7L4.71 4l.7.7 9.88 9.88.7.71 1.86 1.86a.5.5 0 01-.7.7L15.29 16a7.97 7.97 0 01-8.9 1.14l-.12-.07-3.65.92a.5.5 0 01-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 01-.83-2.9l-.02-.37L2 10c0-2.03.76-3.88 2-5.3zm10.58 10.6l-3.61-3.62a.5.5 0 01-.38.31l-.09.01h-3a.5.5 0 01-.09-1H10.3l-2-2h-.8a.5.5 0 01-.18-.97L4.71 5.42a6.97 6.97 0 00-.82 8 .5.5 0 01.07.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 01.19-.01l.09.02.09.04a6.97 6.97 0 008-.82z" fill={primaryFill} /><path d="M16.62 14.5l-.72-.73A7 7 0 006.23 4.1l-.73-.72A8 8 0 0116.61 14.5z" fill={primaryFill} /><path d="M12.5 9h-1.38l-1-1h2.38a.5.5 0 01.09 1h-.09z" fill={primaryFill} /></svg>;
}

const ChatOff20Regular = wrapIcon(rawSvg({}), 'ChatOff20Regular');
export default ChatOff20Regular;
      