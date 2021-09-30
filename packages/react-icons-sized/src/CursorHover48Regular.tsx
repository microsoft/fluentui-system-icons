import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 12.75A4.75 4.75 0 018.75 8h30.5A4.75 4.75 0 0144 12.75v18.5c0 2.4-1.78 4.39-4.1 4.7a3.24 3.24 0 00-.85-1.5l-.95-.95h1.15c1.24 0 2.25-1 2.25-2.25v-18.5c0-1.24-1-2.25-2.25-2.25H8.75c-1.24 0-2.25 1-2.25 2.25v18.5c0 1.24 1 2.25 2.25 2.25H18V36H8.75A4.75 4.75 0 014 31.25v-18.5z" fill={primaryFill} /><path d="M22.13 20.37a1.25 1.25 0 00-2.13.88v21.5a1.25 1.25 0 002.29.7l4.96-7.33c.17-.27.5-.39.8-.3l8.39 2.14a1.25 1.25 0 001.2-2.1l-15.5-15.5zm.37 18.3v-14.4L32.64 34.4l-3.97-1.02a3.25 3.25 0 00-3.5 1.33l-2.67 3.95z" fill={primaryFill} /></svg>;
}

const CursorHover48Regular = wrapIcon(rawSvg({}), 'CursorHover48Regular');
export default CursorHover48Regular;
      