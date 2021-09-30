import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10a8 8 0 10-16 0v.35l.03.38c.1 1.01.38 1.99.83 2.89l.06.12-.9 3.64-.02.08v.08c.03.3.31.52.62.45l3.65-.91.12.06A8 8 0 0018 10zM6 8a1 1 0 011-1h3a1 1 0 011 1v4a1 1 0 01-1 1H7a1 1 0 01-1-1V8zm7.15-.15a.5.5 0 01.85.36v3.58a.5.5 0 01-.85.36L12 11V9l1.15-1.15z" fill={primaryFill} /></svg>;
}

const ChatVideoFilled = wrapIcon(rawSvg({}), 'ChatVideoFilled');
export default ChatVideoFilled;
      