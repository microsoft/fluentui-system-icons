import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.25C1 2 2 1 3.25 1h2.5c1.22 0 2.2.96 2.25 2.16v2.68a2.25 2.25 0 01-1.5 2.03V3.25a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5c0 .33.2.6.5.71v1.53a2.25 2.25 0 01-2-2.24v-2.5z" fill={primaryFill} /><path d="M4 8.75C4 9.99 5 11 6.25 11h2.5C9.99 11 11 10 11 8.75v-2.5c0-1.16-.88-2.11-2-2.24v1.53c.3.1.5.38.5.71v2.5c0 .41-.34.75-.75.75h-2.5a.75.75 0 01-.75-.75V4.13C4.63 4.43 4 5.27 4 6.25v2.5z" fill={primaryFill} /></svg>;
}

const LinkSquare12Filled = wrapIcon(rawSvg({}), 'LinkSquare12Filled');
export default LinkSquare12Filled;
      