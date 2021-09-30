import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7a6 6 0 113 5.2l-2.34.77a.5.5 0 01-.64-.6l.71-2.5A5.98 5.98 0 012 7zm4.5-1.5a.5.5 0 000 1h3a.5.5 0 000-1h-3zm2 2h-2a.5.5 0 000 1h2a.5.5 0 000-1zm3.78 7.45l-2.4-1.2c.43-.13.86-.29 1.26-.5l1.36.7 4.5-2.26V11a1 1 0 00-1-1h-1.67c.15-.32.28-.65.38-1H16a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-2.07c.33.05.66.07 1 .07v2a1 1 0 001 1h7a1 1 0 001-1v-3.2l-4.28 2.15a.5.5 0 01-.44 0z" fill={primaryFill} /></svg>;
}

const ChatMailFilled = wrapIcon(rawSvg({}), 'ChatMailFilled');
export default ChatMailFilled;
      