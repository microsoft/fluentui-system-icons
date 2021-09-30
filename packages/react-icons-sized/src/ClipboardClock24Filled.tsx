import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.38 13.62c0 .34.27.63.62.63h1.38a.63.63 0 000-1.25h-.76v-1.63a.63.63 0 00-1.24 0v2.25zM13.75 2h-3.5c-1.16 0-2.11.87-2.24 2H6.25C5.01 4 4 5 4 6.25v13.5C4 20.99 5 22 6.25 22h11.5c1.24 0 2.25-1 2.25-2.25V6.25C20 5.01 19 4 17.75 4h-1.76a2.25 2.25 0 00-2.24-2zm-3.5 1.5h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 010-1.5zM12 8.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5z" fill={primaryFill} /></svg>;
}

const ClipboardClock24Filled = wrapIcon(rawSvg({}), 'ClipboardClock24Filled');
export default ClipboardClock24Filled;
      