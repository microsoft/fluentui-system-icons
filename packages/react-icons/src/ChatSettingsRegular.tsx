import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a7 7 0 00-6.1 10.42.5.5 0 01.04.37l-.75 3.02 3.02-.75a.5.5 0 01.37.05c.9.5 1.92.82 3.01.88.19.36.4.7.66 1a7.93 7.93 0 01-3.99-.92L2.62 18a.5.5 0 01-.6-.61l.9-3.64A8 8 0 1118 10.26c-.3-.26-.64-.48-1-.67A7 7 0 0010 3zm2.07 8.44a2 2 0 01-1.44 2.48l-.46.12a4.74 4.74 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const ChatSettingsRegular = wrapIcon(rawSvg({}), 'ChatSettingsRegular');
export default ChatSettingsRegular;
      