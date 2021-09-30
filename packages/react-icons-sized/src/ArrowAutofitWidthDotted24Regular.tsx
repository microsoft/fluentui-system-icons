import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.76 4C19 4 20 5 20 6.25v4a.75.75 0 01-1.5 0v-4a.75.75 0 00-.75-.75H6.26a.75.75 0 00-.75.75v4a.75.75 0 01-1.5 0v-4C4 5.01 5 4 6.26 4h11.5zm.52 15.28l2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5a.75.75 0 10-1.06 1.06l1.97 1.97-1.97 1.97a.75.75 0 101.06 1.06zM3.22 15.72c-.3.3-.3.77 0 1.06l2.5 2.5a.75.75 0 001.06-1.06l-1.97-1.97 1.97-1.97a.75.75 0 10-1.06-1.06l-2.5 2.5zm9.78.53a.75.75 0 00-.75-.75h-.5a.75.75 0 000 1.5h.5c.41 0 .75-.34.75-.75zm-3 0c0 .41-.34.75-.75.75h-1.5a.75.75 0 010-1.5h1.5c.41 0 .75.34.75.75zm7 0a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5h1.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
}

const ArrowAutofitWidthDotted24Regular = wrapIcon(rawSvg({}), 'ArrowAutofitWidthDotted24Regular');
export default ArrowAutofitWidthDotted24Regular;
      