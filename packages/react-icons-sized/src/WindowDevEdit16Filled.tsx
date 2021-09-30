import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2A2.75 2.75 0 002 4.75v6a2.75 2.75 0 002.75 2.75h2.42l.18-.71c.07-.28.17-.54.3-.8h-2.9c-.7 0-1.25-.55-1.25-1.24V5H12v2.38l.63-.63c.26-.26.55-.45.87-.57V4.75A2.75 2.75 0 0010.75 2h-6zm6.24 6.39a.5.5 0 00-.14-.24l-2-2a.5.5 0 00-.7.7L9.79 8.5l-1.64 1.65a.5.5 0 00.24.84l2.6-2.6zM6.85 6.85a.5.5 0 10-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L5.21 8.5l1.64-1.65zm8.7.6c-.62-.6-1.6-.6-2.21 0l-4.3 4.3c-.35.35-.6.8-.72 1.28l-.3 1.21a.6.6 0 00.73.74l1.22-.3c.48-.12.93-.38 1.29-.73l4.28-4.29c.61-.6.61-1.6 0-2.2z" fill={primaryFill} /></svg>;
}

const WindowDevEdit16Filled = wrapIcon(rawSvg({}), 'WindowDevEdit16Filled');
export default WindowDevEdit16Filled;
      