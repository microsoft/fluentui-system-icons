import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2A2.75 2.75 0 002 4.75v8.5A2.75 2.75 0 004.75 16h5.88l.12-.24.73-1.26H4.75c-.7 0-1.25-.56-1.25-1.25V6h11v1.15c.46-.25.97-.4 1.5-.44V4.75A2.75 2.75 0 0013.25 2h-8.5z" fill={primaryFill} /><path d="M14.02 12.1a2.78 2.78 0 012.77-4.35l-1.31 2.27a.93.93 0 001.6.92l1.32-2.27a2.78 2.78 0 01-2.37 4.58l-2.4 4.17a1.16 1.16 0 01-2.01-1.16l2.4-4.16z" fill={primaryFill} /><path d="M12.56 11.15c-.12-.69-.06-1.4.22-2.08l-1.93-1.92a.5.5 0 00-.7.7L12.29 10l-2.14 2.15a.5.5 0 00.7.7l1.71-1.7z" fill={primaryFill} /><path d="M8.35 7.15c.2.2.2.5 0 .7L6.21 10l2.14 2.15a.5.5 0 01-.7.7l-2.5-2.5a.5.5 0 010-.7l2.5-2.5c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const WindowDevToolsFilled = wrapIcon(rawSvg({}), 'WindowDevToolsFilled');
export default WindowDevToolsFilled;
      