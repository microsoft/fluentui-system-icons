import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25zm9 3.25c.41 0 .75.34.75.75v6c0 .97-.78 1.75-1.75 1.75H9.75a.75.75 0 010-1.5H11c.14 0 .25-.11.25-.25v-6c0-.41.34-.75.75-.75zm2 1.75c0-.97.78-1.75 1.75-1.75h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v1.5c0 .14.11.25.25.25h.5c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75h-1.5a.75.75 0 010-1.5h1.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 00-.25-.25h-.5c-.97 0-1.75-.78-1.75-1.75v-1.5z" fill={primaryFill} /></svg>;
}

const Javascript24Filled = wrapIcon(rawSvg({}), 'Javascript24Filled');
export default Javascript24Filled;
      