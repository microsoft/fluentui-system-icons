import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm7.25 1.5a.75.75 0 00-.75.75v5c0 .14-.11.25-.25.25h-1a.75.75 0 000 1.5h1c.97 0 1.75-.78 1.75-1.75v-5a.75.75 0 00-.75-.75zm1.25 1.75v1c0 .97.78 1.75 1.75 1.75h.5c.14 0 .25.11.25.25v1c0 .14-.11.25-.25.25h-1.5a.75.75 0 000 1.5h1.5c.97 0 1.75-.78 1.75-1.75v-1c0-.97-.78-1.75-1.75-1.75h-.5a.25.25 0 01-.25-.25v-1c0-.14.11-.25.25-.25h1.5a.75.75 0 000-1.5h-1.5c-.97 0-1.75.78-1.75 1.75z" fill={primaryFill} /></svg>;
}

const JavascriptFilled = wrapIcon(rawSvg({}), 'JavascriptFilled');
export default JavascriptFilled;
      