import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 114.26 7.07L2.62 18a.5.5 0 01-.6-.61l.9-3.64A7.97 7.97 0 012 10zm7.25-2.7c.15-.17.39-.3.75-.3s.6.13.75.3c.16.2.25.44.25.7 0 .32-.07.52-.17.69-.1.17-.23.3-.42.5l-.02.03c-.19.2-.42.44-.6.78-.18.35-.29.76-.29 1.3a.5.5 0 101 0c0-.4.08-.64.18-.84.1-.2.24-.35.43-.55l.04-.04c.17-.18.38-.4.55-.68.18-.32.3-.7.3-1.19a1.95 1.95 0 00-2-2 1.95 1.95 0 00-2 2 .5.5 0 001 0c0-.26.09-.5.25-.7zm1.45 6.21a.7.7 0 10-1.4 0 .7.7 0 001.4 0z" fill={primaryFill} /></svg>;
}

const ChatHelpFilled = wrapIcon(rawSvg({}), 'ChatHelpFilled');
export default ChatHelpFilled;
      