import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.09v-.03l.04-.12c.04-.11.1-.25.2-.39.2-.26.55-.55 1.26-.55.64 0 1.04.2 1.27.5.23.3.35.76.24 1.42-.07.38-.26.61-.57.8-.24.16-.52.28-.85.41l-.43.18c-.5.21-1.05.5-1.47 1A3.27 3.27 0 002 9.5a.5.5 0 00.5.5h4a.5.5 0 000-1H3.03c.07-.49.23-.81.43-1.05.26-.32.64-.52 1.1-.72.1-.05.2-.1.32-.14.36-.14.77-.3 1.1-.52.49-.31.89-.76 1.01-1.49.15-.84.02-1.62-.44-2.2C6.1 2.29 5.36 2 4.5 2a2.44 2.44 0 00-2.49 1.88v.03S2 4 2 3.92a.5.5 0 00.98.18zm10 .41a2.5 2.5 0 015 0v3a2.5 2.5 0 01-5 0v-3zm4 3v-3a1.5 1.5 0 00-3 0v3a1.5 1.5 0 003 0zm-14 5c0-.28.22-.5.5-.5h3a.5.5 0 010 1H4v2h1.5a.5.5 0 010 1H4v1.5a.5.5 0 01-1 0v-5zm5 0c0-.28.22-.5.5-.5H10a2 2 0 110 4H9v1.5a.5.5 0 01-1 0v-5zM9 15h1a1 1 0 100-2H9v2zm5.75-3a1.75 1.75 0 100 3.5h.5a.75.75 0 010 1.5h-.76a.49.49 0 01-.49-.49v-.01a.5.5 0 00-1 0v.01c0 .82.67 1.49 1.49 1.49h.76a1.75 1.75 0 100-3.5h-.5a.75.75 0 010-1.5h.76c.27 0 .49.22.49.49v.01a.5.5 0 001 0v-.01c0-.82-.67-1.49-1.49-1.49h-.76zM9 2.5a.5.5 0 00-1 0v4a.5.5 0 00.5.5H11v2.5a.5.5 0 001 0v-7a.5.5 0 00-1 0V6H9V2.5z" fill={primaryFill} /></svg>;
}

const Fps24020Regular = wrapIcon(rawSvg({}), 'Fps24020Regular');
export default Fps24020Regular;
      