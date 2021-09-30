import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0011.5 2h-7zM13 8h-2.59a.5.5 0 00-.41.5c0 .05 0 .16-.03.3-.04.26-.12.5-.23.73-.3.61-.84.97-1.74.97s-1.43-.36-1.74-.97A2.55 2.55 0 016 8.5a.5.5 0 00-.5-.5H3V4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5V8zM3 9h2.04l.04.17c.06.26.15.53.29.8.47.95 1.34 1.53 2.63 1.53 1.29 0 2.16-.58 2.63-1.53l.1-.2c.09-.2.15-.4.2-.6l.03-.17H13v2.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5V9z" fill={primaryFill} /></svg>;
}

const MailInbox16Regular = wrapIcon(rawSvg({}), 'MailInbox16Regular');
export default MailInbox16Regular;
      