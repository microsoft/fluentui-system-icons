import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 1c-.65 0-1.2.42-1.41 1H3a2 2 0 00-2 2v4.8c0 .54.13 1.07.37 1.56L2 11.62A2.5 2.5 0 004.24 13h1.82a3.1 3.1 0 002.52-1.5 8.04 8.04 0 013.62-3.04.5.5 0 00.29-.58 2.17 2.17 0 00-.8-1.28 1.9 1.9 0 00-1.13-.35c-.2 0-.4.03-.56.06V4a2 2 0 00-2-2h-.09c-.2-.58-.76-1-1.41-1h-2zm0 1H5v4.5a.5.5 0 001 0V2h.5c.28 0 .5.22.5.5v4a.5.5 0 101 0V3a1 1 0 011 1v3a.5.5 0 00.72.45h.01a1.51 1.51 0 01.24-.1 2 2 0 01.6-.1c.2 0 .39.05.53.15.1.07.19.17.28.34-1.87.9-3 2.22-3.64 3.21-.4.63-1.04 1.05-1.68 1.05H4.24a1.5 1.5 0 01-1.35-.83l-.63-1.26A2.5 2.5 0 012 8.79V4a1 1 0 011-1v3.5a.5.5 0 101 0v-4c0-.28.22-.5.5-.5zm8.76 5.05a5.5 5.5 0 11-6.1 6.78c.33-.11.64-.27.93-.45a4.5 4.5 0 105.4-5.27c.02-.16 0-.32-.03-.47-.06-.2-.12-.4-.2-.59zm-2.51 5.45a.75.75 0 100-1.5.75.75 0 000 1.5zm4.25-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-4.05 2.53a.5.5 0 10-.9.44c.25.5 1.05 1.28 2.45 1.28 1.4 0 2.2-.78 2.45-1.28a.5.5 0 10-.9-.44c-.08.17-.55.72-1.55.72s-1.47-.55-1.55-.72zm-9.58-3.92l.45-.23z" fill={primaryFill} /></svg>;
}

const EmojiHand20Regular = wrapIcon(rawSvg({}), 'EmojiHand20Regular');
export default EmojiHand20Regular;
      