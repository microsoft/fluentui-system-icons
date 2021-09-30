import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.25 2h3.5c1.16 0 2.11.87 2.24 2h1.76C18.99 4 20 5 20 6.25v7.46a1.75 1.75 0 00-3.43-.45L16.06 15h-.73a1.75 1.75 0 00-2.89-.41l-2 2.25a1.75 1.75 0 000 2.32l2 2.25c.35.39.82.59 1.3.59H6.25C5.01 22 4 21 4 19.75V6.25C4 5.01 5 4 6.25 4h1.76c.13-1.13 1.08-2 2.24-2zm3.5 1.5h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5z" fill={primaryFill} /><path d="M11.19 18.5l2 2.25a.75.75 0 101.12-1L12.75 18l1.56-1.75a.75.75 0 00-1.12-1l-2 2.25a.75.75 0 000 1z" fill={primaryFill} /><path d="M17.53 13.54a.75.75 0 011.44.42l-2.5 8.5a.75.75 0 11-1.44-.42l2.5-8.5z" fill={primaryFill} /><path d="M19.75 20.81a.75.75 0 01-.06-1.06L21.25 18l-1.56-1.75a.75.75 0 011.12-1l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 01-1.06.06z" fill={primaryFill} /></svg>;
}

const ClipboardCode24Filled = wrapIcon(rawSvg({}), 'ClipboardCode24Filled');
export default ClipboardCode24Filled;
      