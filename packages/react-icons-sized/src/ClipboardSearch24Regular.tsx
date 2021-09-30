import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.99 4a2.25 2.25 0 00-2.24-2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v3.85c.47-.24.97-.41 1.5-.5V6.24c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75h-3.92c.23.47.23 1.03 0 1.5h3.92c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76zm0 .1l.01.15V4.1zm-5.74-.6h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5zm-.3 14.39a4.5 4.5 0 10-1.15.98l2.92 2.91a.75.75 0 101.06-1.06l-2.83-2.83zM6.5 18a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /></svg>;
}

const ClipboardSearch24Regular = wrapIcon(rawSvg({}), 'ClipboardSearch24Regular');
export default ClipboardSearch24Regular;
      