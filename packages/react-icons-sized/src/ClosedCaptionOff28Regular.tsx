import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l1.53 1.53A4.24 4.24 0 002 8.25v11.5C2 22.1 3.9 24 6.25 24h15.5c.36 0 .72-.05 1.06-.13l1.9 1.91a.75.75 0 001.07-1.06L3.28 2.22zM21.44 22.5H6.25a2.75 2.75 0 01-2.75-2.75V8.25c0-1 .53-1.88 1.33-2.36L8.9 9.96c-.63.25-1.22.67-1.67 1.32-.47.7-.73 1.6-.73 2.72s.26 2.02.73 2.72c.48.7 1.13 1.13 1.8 1.36.68.24 1.4.27 2.02.18.62-.1 1.23-.32 1.67-.67a.75.75 0 10-.94-1.18c-.18.15-.52.3-.95.36-.42.07-.89.04-1.3-.1-.42-.15-.78-.4-1.05-.8S8 14.89 8 14c0-.88.2-1.48.48-1.88.27-.4.63-.64 1.04-.79.2-.06.41-.1.62-.12L16 17.05c.11.13.23.24.35.35l5.1 5.1zM7.18 4l1.5 1.5h13.07a2.75 2.75 0 012.75 2.75v11.5c0 .45-.11.88-.3 1.26l1.09 1.1c.45-.68.71-1.49.71-2.36V8.25C26 5.9 24.1 4 21.75 4H7.18zm14.04 13.59l-.27.18-1.12-1.12c.2-.07.35-.15.45-.24a.75.75 0 11.94 1.18zm-5.91-5.47l1.23 1.24c.07-.54.24-.94.44-1.24.27-.4.63-.64 1.04-.79.42-.14.89-.17 1.31-.1.43.06.77.2.95.36a.75.75 0 10.94-1.18 3.53 3.53 0 00-1.67-.67 4.32 4.32 0 00-2.01.18 3.53 3.53 0 00-2.23 2.2z" fill={primaryFill} /></svg>;
}

const ClosedCaptionOff28Regular = wrapIcon(rawSvg({}), 'ClosedCaptionOff28Regular');
export default ClosedCaptionOff28Regular;
      