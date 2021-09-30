import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 7a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M5.7 10c-.34 0-.7.24-.73.66a2 2 0 00.46 1.45C5.9 12.65 6.7 13 8 13c1.3 0 2.1-.35 2.57-.89a2 2 0 00.46-1.45.71.71 0 00-.73-.66H5.7zm.5 1.46a.93.93 0 01-.22-.46h4.04a.93.93 0 01-.21.46c-.2.24-.68.54-1.81.54s-1.6-.3-1.8-.54z" fill={primaryFill} /><path d="M10.91 2h.59c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 13.5v-10C3 2.67 3.67 2 4.5 2h.59c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1zM5.1 3H4.5a.5.5 0 00-.5.5v10c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1zM6 2.5c0 .28.22.5.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const Guest16Regular = wrapIcon(rawSvg({}), 'Guest16Regular');
export default Guest16Regular;
      