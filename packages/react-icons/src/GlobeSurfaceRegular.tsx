import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 3a6 6 0 110 12 6 6 0 010-12zm0 11c.25 0 .74-.23 1.23-1.2.24-.5.45-1.1.58-1.8H8.2c.13.7.34 1.3.58 1.8.5.97.98 1.2 1.23 1.2zm-1.95-4h3.9a10.93 10.93 0 000-2h-3.9a10.94 10.94 0 000 2zm3.86 3.62A5.02 5.02 0 0014.58 11h-1.75a7.76 7.76 0 01-.92 2.62zM12.96 10h1.94a5.02 5.02 0 000-2h-1.94a11.96 11.96 0 010 2zM11.9 4.38c.42.68.74 1.59.92 2.62h1.75a5.02 5.02 0 00-2.67-2.62zm-.68.82C10.73 4.23 10.25 4 10 4s-.74.23-1.23 1.2c-.24.5-.45 1.1-.58 1.8h3.62c-.13-.7-.34-1.3-.58-1.8zm-3.14-.82A5.02 5.02 0 005.42 7h1.75c.18-1.03.5-1.94.92-2.62zM5 9c0 .34.03.68.1 1h1.94a11.97 11.97 0 010-2H5.1c-.07.32-.1.66-.1 1zm.42 2a5.02 5.02 0 002.67 2.62A7.76 7.76 0 017.17 11H5.42zM3.5 13h.75c.26.36.54.7.85 1H3.9l-.75 3h13.72l-.75-3H14.9c.31-.3.6-.64.85-1h.75a.5.5 0 01.49.38l1 4a.5.5 0 01-.49.62h-15a.5.5 0 01-.49-.62l1-4A.5.5 0 013.5 13z" fill={primaryFill} /></svg>;
}

const GlobeSurfaceRegular = wrapIcon(rawSvg({}), 'GlobeSurfaceRegular');
export default GlobeSurfaceRegular;
      