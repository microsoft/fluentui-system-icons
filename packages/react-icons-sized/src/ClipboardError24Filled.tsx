import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v5.25A6.5 6.5 0 0012.81 22H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2zm3.5 1.5h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5zm9.25 14a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM17.5 14a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zm0 7.13a.62.62 0 100-1.25.62.62 0 000 1.25z" fill={primaryFill} /></svg>;
}

const ClipboardError24Filled = wrapIcon(rawSvg({}), 'ClipboardError24Filled');
export default ClipboardError24Filled;
      