import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25C2 3.45 3.46 2 5.25 2h11.5C18.55 2 20 3.46 20 5.25v2.76a4.5 4.5 0 00-1.5.1V7h-15v9.75c0 .97.78 1.75 1.75 1.75h7.98l-.44.76c-.13.24-.22.49-.28.74H5.25A3.25 3.25 0 012 16.75V5.25zM5.25 3.5c-.97 0-1.75.78-1.75 1.75v.25h15v-.25c0-.97-.78-1.75-1.75-1.75H5.25zM19.85 9a3.5 3.5 0 00-3.17 5.52l-3.02 5.24a1.46 1.46 0 102.53 1.46l3.03-5.25a3.5 3.5 0 002.97-5.76l-1.65 2.86a1.17 1.17 0 11-2.02-1.17l1.65-2.86-.31-.04zm-9.55.24c.28.3.26.78-.04 1.06l-2.4 2.2 2.4 2.2a.75.75 0 01-1.02 1.1l-3-2.75a.75.75 0 010-1.1l3-2.75a.75.75 0 011.06.04zm2.96 6.56l2.02-1.85a4.5 4.5 0 01-.01-2.9L13.26 9.2a.75.75 0 00-1.02 1.1l2.4 2.2-2.4 2.2a.75.75 0 001.02 1.1z" fill={primaryFill} /></svg>;
}

const WindowDevTools24Regular = wrapIcon(rawSvg({}), 'WindowDevTools24Regular');
export default WindowDevTools24Regular;
      