import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 11c.97 0 1.75.78 1.75 1.75v2.5C8 16.2 7.22 17 6.25 17h-2.5C2.78 17 2 16.2 2 15.25v-2.5c0-.97.78-1.75 1.75-1.75h2.5zm7 0c.97 0 1.75.78 1.75 1.75v2.5c0 .96-.78 1.75-1.75 1.75h-2.5C9.78 17 9 16.2 9 15.25v-2.5c0-.97.78-1.75 1.75-1.75h2.5zm7 0c.97 0 1.75.78 1.75 1.75v2.5c0 .96-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.79-1.75-1.75v-2.5c0-.97.78-1.75 1.75-1.75h2.5zM7.97 7.72l3.5-3.5a.75.75 0 01.97-.08l.08.07 3.6 3.5a.75.75 0 01-.95 1.15l-.09-.07-3.07-2.99-2.98 2.98A.75.75 0 017.9 7.8l.07-.08 3.5-3.5-3.5 3.5z" fill={primaryFill} /></svg>;
}

const ExtendedDock24Filled = wrapIcon(rawSvg({}), 'ExtendedDock24Filled');
export default ExtendedDock24Filled;
      