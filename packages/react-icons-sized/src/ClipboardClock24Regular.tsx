import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.63 13v-1.63a.62.62 0 10-1.26 0v2.25a.62.62 0 00.7.62h1.31a.62.62 0 100-1.24h-.76zm-5.38 0a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zM12 9.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4-5.42A2.25 2.25 0 0013.74 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76v.08zm0 .02v0zm-5.75 2.4h3.5c.78 0 1.47-.4 1.87-1h2.13c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H6.25a.75.75 0 01-.75-.75V6.25c0-.41.34-.75.75-.75h2.13c.4.6 1.09 1 1.87 1zm0-3h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const ClipboardClock24Regular = wrapIcon(rawSvg({}), 'ClipboardClock24Regular');
export default ClipboardClock24Regular;
      