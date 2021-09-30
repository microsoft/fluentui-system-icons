import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3A.5.5 0 016 6z" fill={primaryFill} /><path d="M6.5 7.5a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M8 1a6 6 0 00-5.27 8.87l-.71 2.5a.5.5 0 00.64.6L5 12.2A6 6 0 108 1zM3 7a5 5 0 112.33 4.23.5.5 0 00-.43-.06l-1.66.56.51-1.79a.5.5 0 00-.05-.39A4.97 4.97 0 013 7z" fill={primaryFill} /><path d="M12.28 14.95l-2.4-1.2c.43-.13.86-.29 1.26-.5l1.36.7 4.5-2.26V11a1 1 0 00-1-1h-1.67c.15-.32.28-.65.38-1H16a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-2.07c.33.05.66.07 1 .07v2a1 1 0 001 1h7a1 1 0 001-1v-3.2l-4.28 2.15a.5.5 0 01-.44 0z" fill={primaryFill} /></svg>;
}

const ChatMailRegular = wrapIcon(rawSvg({}), 'ChatMailRegular');
export default ChatMailRegular;
      