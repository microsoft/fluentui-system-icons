import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 5.25c0-.97.78-1.75 1.75-1.75h2.5c.97 0 1.75.78 1.75 1.75v2.5c0 .97-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75v-2.5zM15.25 3.5c-.97 0-1.75.78-1.75 1.75v2.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-2.5c0-.97-.78-1.75-1.75-1.75h-2.5zM15 5.25c0-.14.11-.25.25-.25h2.5c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25h-2.5a.25.25 0 01-.25-.25v-2.5zM2 16a4.5 4.5 0 014.5-4.5h11a4.5 4.5 0 110 9h-11A4.5 4.5 0 012 16zm6.5 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm5 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm3.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
}

const Production24Filled = wrapIcon(rawSvg({}), 'Production24Filled');
export default Production24Filled;
      