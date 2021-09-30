import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.25 7.3c-.16.2-.25.44-.25.7a.5.5 0 01-1 0 1.95 1.95 0 012-2 1.95 1.95 0 012 2c0 .49-.12.87-.3 1.19-.17.28-.38.5-.55.68l-.04.04c-.19.2-.33.35-.43.55-.1.2-.18.45-.18.83a.5.5 0 11-1 0 2.71 2.71 0 01.89-2.07l.02-.02c.19-.2.32-.34.42-.51.1-.17.17-.37.17-.69 0-.26-.09-.5-.25-.7A.95.95 0 0010 7c-.36 0-.6.13-.75.3zm.75 6.91a.7.7 0 100-1.4.7.7 0 000 1.4zM2 10a8 8 0 114.26 7.07L2.62 18a.5.5 0 01-.6-.61l.9-3.64A7.97 7.97 0 012 10zm8-7a7 7 0 00-6.1 10.42.5.5 0 01.04.37l-.75 3.02 3.02-.75a.5.5 0 01.37.05A7 7 0 1010 3z" fill={primaryFill} /></svg>;
}

const ChatHelp20Regular = wrapIcon(rawSvg({}), 'ChatHelp20Regular');
export default ChatHelp20Regular;
      