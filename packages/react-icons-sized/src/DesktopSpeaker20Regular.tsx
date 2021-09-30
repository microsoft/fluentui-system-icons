import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v9c0 1.1.9 2 2 2h3v2H5.5a.5.5 0 000 1h6.38l-1-1H8v-2h1v-1H4a1 1 0 01-1-1V4a1 1 0 011-1h12a1 1 0 011 1v6.02c.34-.06.7 0 1 .18V4a2 2 0 00-2-2H4z" fill={primaryFill} /><path d="M13.7 11.04c.18.08.3.26.3.46v6a.5.5 0 01-.85.35L11.29 16h-.79a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 01.54-.11z" fill={primaryFill} /><path d="M17.65 11.2c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 01-.85-.52l.12-.19a5.9 5.9 0 00.58-2.6 5.9 5.9 0 00-.58-2.58l-.07-.11a.5.5 0 01.8-.6z" fill={primaryFill} /><path d="M16.22 12.97c-.1-.3-.2-.55-.27-.7a.5.5 0 10-.9.45 4.6 4.6 0 01.45 1.78 3.94 3.94 0 01-.37 1.6l-.08.18a.5.5 0 10.9.44 5.5 5.5 0 00.55-2.22c0-.5-.1-1.02-.28-1.53z" fill={primaryFill} /></svg>;
}

const DesktopSpeaker20Regular = wrapIcon(rawSvg({}), 'DesktopSpeaker20Regular');
export default DesktopSpeaker20Regular;
      