import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4.5c0 .28.22.5.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5zM4.5 7a.5.5 0 010-1h3a.5.5 0 010 1h-3zM4 8.5c0 .28.22.5.5.5h1a.5.5 0 000-1h-1a.5.5 0 00-.5.5zm0-7a.5.5 0 011 0V2h2v-.5a.5.5 0 011 0V2a2 2 0 012 2v4l-3 3H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2v-.5zM7 10V8.5c0-.28.22-.5.5-.5H9V4a1 1 0 00-1-1H4a1 1 0 00-1 1v5a1 1 0 001 1h3z" fill={primaryFill} /></svg>;
}

const Notepad12Regular = wrapIcon(rawSvg({}), 'Notepad12Regular');
export default Notepad12Regular;
      