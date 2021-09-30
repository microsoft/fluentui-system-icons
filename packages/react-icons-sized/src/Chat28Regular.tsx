import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2.5a11.5 11.5 0 11-5.43 21.64l-4.5 1.35a1.25 1.25 0 01-1.56-1.55l1.36-4.5A11.5 11.5 0 0114 2.5zM14 4a10 10 0 00-8.67 14.97l.16.28-1.4 4.67 4.67-1.4.27.16A10 10 0 1014 4zm-3.75 11.5h4.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6-4.5zm0-4.5h7.5a.75.75 0 01.11 1.5h-7.6a.75.75 0 01-.1-1.5h7.6-7.5z" fill={primaryFill} /></svg>;
}

const Chat28Regular = wrapIcon(rawSvg({}), 'Chat28Regular');
export default Chat28Regular;
      