import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a1 1 0 00-1.68-.73l-3.87 3.6A.5.5 0 016.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 01.35.13l2.83 2.63.15-.6c.04-.17.1-.32.16-.48L7.13 13.4A1.5 1.5 0 006.1 13H3.5a.5.5 0 01-.5-.5v-5c0-.28.22-.5.5-.5h2.6c.38 0 .75-.15 1.03-.4L11 3v10.94l1-1V3zm3.96 1.66a7.97 7.97 0 011.99 4.46c-.33-.1-.68-.14-1.02-.12a6.97 6.97 0 00-1.71-3.67.5.5 0 01.74-.67zm-1.2 2.59c.42.72.65 1.5.72 2.27-.13.1-.26.2-.38.32l-.62.62c.1-.9-.09-1.86-.58-2.71a.5.5 0 01.86-.5zm-3.78 8.12l4.83-4.83a1.87 1.87 0 112.64 2.65l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.02z" fill={primaryFill} /></svg>;
}

const SpeakerEdit20Regular = wrapIcon(rawSvg({}), 'SpeakerEdit20Regular');
export default SpeakerEdit20Regular;
      