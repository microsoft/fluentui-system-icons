import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.25C3 4.01 4 3 5.25 3h13.5C19.99 3 21 4 21 5.25v13.5c0 .41-.34.75-.75.75h-1v-8.25c0-.1-.01-.22-.04-.33l-.73-3.32a3 3 0 00-2.93-2.35h-7.1A3 3 0 005.52 7.6l-.73 3.32c-.03.11-.04.22-.04.33v8.25h-1a.75.75 0 01-.75-.75V5.25z" fill={primaryFill} /><path d="M8.45 6c-1.05 0-1.96.73-2.2 1.76l-.73 3.33a.75.75 0 00-.02.16v9c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75v-.75h3v.75c0 .97.78 1.75 1.75 1.75h1.5c.97 0 1.75-.78 1.75-1.75v-9c0-.05 0-.1-.02-.16l-.74-3.33A2.25 2.25 0 0015.54 6H8.46zm-.73 2.09a.75.75 0 01.73-.59h7.1c.35 0 .65.24.73.59l.54 2.41H7.18l.54-2.41zM7 20.25v-.75h2v.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25zm10-.75v.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25v-.75h2zm-6.25-3h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5zm-.74-2.5a1 1 0 11-2 0 1 1 0 012 0zM15 15a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const VehicleTruck24Filled = wrapIcon(rawSvg({}), 'VehicleTruck24Filled');
export default VehicleTruck24Filled;
      