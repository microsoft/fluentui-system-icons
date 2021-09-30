import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.3 12l2.85 2.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L3.9 4.62A4.48 4.48 0 003.5 6.5v2.4l-.96 2.41A.5.5 0 003 12h3a2 2 0 104 0h1.3zm-1-1H3.73l.72-1.82A.5.5 0 004.5 9V6.5c0-.39.06-.76.18-1.11L10.3 11zM8 13a1 1 0 01-1-1h2a1 1 0 01-1 1z" fill={primaryFill} /><path d="M11.69 9.57l-.15-.39A.5.5 0 0111.5 9V6.5a3.5 3.5 0 00-5.64-2.77l-.72-.7A4.5 4.5 0 0112.5 6.5v2.4l.96 2.4.02.05-1.79-1.8z" fill={primaryFill} /></svg>;
}

const AlertOff16Regular = wrapIcon(rawSvg({}), 'AlertOff16Regular');
export default AlertOff16Regular;
      