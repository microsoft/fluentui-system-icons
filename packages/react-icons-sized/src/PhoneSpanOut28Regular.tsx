import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 2A2.75 2.75 0 006 4.75v4.88a2.26 2.26 0 011.5 0V4.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v4.88a2.26 2.26 0 011.5 0V4.75A2.75 2.75 0 0019.25 2H8.75z" fill={primaryFill} /><path d="M21.78 11.22a.75.75 0 10-1.06 1.06L22.44 14h-4.69a.75.75 0 000 1.5h4.69l-1.72 1.72a.75.75 0 000 1.06c.3.3.77.3 1.06 0l3-3c.3-.3.3-.77 0-1.06l-3-3z" fill={primaryFill} /><path d="M20.5 19.87c.48.17 1.02.17 1.5 0v3.38A2.75 2.75 0 0119.25 26H8.75A2.75 2.75 0 016 23.25v-3.38c.48.17 1.02.17 1.5 0v3.38c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-3.38z" fill={primaryFill} /><path d="M5.56 15.5h4.69a.75.75 0 000-1.5H5.56l1.72-1.72a.75.75 0 10-1.06-1.06l-3 3c-.3.3-.3.77 0 1.06l3 3a.75.75 0 001.06-1.06L5.56 15.5z" fill={primaryFill} /></svg>;
}

const PhoneSpanOut28Regular = wrapIcon(rawSvg({}), 'PhoneSpanOut28Regular');
export default PhoneSpanOut28Regular;
      