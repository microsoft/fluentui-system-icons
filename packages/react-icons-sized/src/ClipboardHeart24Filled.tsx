import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v4.98a4.46 4.46 0 00-2.99.73 4.47 4.47 0 00-5.64 6.87L14.54 22H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2zm3.5 1.5h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5zm3.26 19.25a.75.75 0 01-.53-.22l-4.4-4.4a3.47 3.47 0 114.9-4.91l.03.04.04-.04a3.47 3.47 0 114.9 4.9l-4.4 4.41a.75.75 0 01-.54.22z" fill={primaryFill} /></svg>;
}

const ClipboardHeart24Filled = wrapIcon(rawSvg({}), 'ClipboardHeart24Filled');
export default ClipboardHeart24Filled;
      