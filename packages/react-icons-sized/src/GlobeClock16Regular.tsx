import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8a6 6 0 004 5.66 5.48 5.48 0 01-.74-1.47A5.03 5.03 0 014 11h1.02a5.57 5.57 0 010-1h-1.6a4.98 4.98 0 010-4h1.74a12.06 12.06 0 00-.07 3.5c.15-.8.47-1.55.93-2.2.03-.45.08-.89.16-1.3h1.16a5.47 5.47 0 016.32 0A6 6 0 002 8zm6-5c.37 0 .88.36 1.31 1.32.1.2.18.43.26.68H6.43c.08-.25.16-.47.26-.68C7.12 3.36 7.63 3 8 3zm-2.22.9c-.15.34-.29.7-.4 1.1H4a5.02 5.02 0 012.04-1.6c-.1.16-.18.33-.26.5zm4.18-.5c.81.35 1.52.9 2.04 1.6h-1.38a7.53 7.53 0 00-.66-1.6zM15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10.5 8a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H12a.5.5 0 000-1h-1V8.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const GlobeClock16Regular = wrapIcon(rawSvg({}), 'GlobeClock16Regular');
export default GlobeClock16Regular;
      