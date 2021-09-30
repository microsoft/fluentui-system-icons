import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.54 5.45C33.82-1.47 50.88 16.9 41.59 33.61c-4.22 7.6-14.7 13.7-26.9 7.92L6.2 43.96a1.75 1.75 0 01-2.16-2.16c.5-1.8 1.7-6.06 2.4-8.37-5.26-9.39-1.71-23.26 10.1-27.98zM16 20.25c0 .69.55 1.25 1.25 1.25h13.5a1.25 1.25 0 000-2.5h-13.5c-.7 0-1.25.56-1.25 1.25zm1.25 6.22a1.25 1.25 0 100 2.5h9.5a1.25 1.25 0 000-2.5h-9.5z" fill={primaryFill} /></svg>;
}

const Chat48Filled = wrapIcon(rawSvg({}), 'Chat48Filled');
export default Chat48Filled;
      