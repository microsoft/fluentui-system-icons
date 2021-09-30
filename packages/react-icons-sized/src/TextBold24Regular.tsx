import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.94 4.44A1.5 1.5 0 018 4h4.38a4.64 4.64 0 013.75 7.3A4.7 4.7 0 0118 15.13c0 3.11-2.7 4.88-4.88 4.88H8a1.5 1.5 0 01-1.5-1.5v-13c0-.4.15-.78.44-1.06zm2.56 5.81h2.88c.9 0 1.62-.76 1.62-1.62C14 7.76 13.28 7 12.38 7H9.5v3.25zm0 3V17h3.62c.87 0 1.88-.75 1.88-1.88a1.9 1.9 0 00-1.88-1.87H9.5z" fill={primaryFill} /></svg>;
}

const TextBold24Regular = wrapIcon(rawSvg({}), 'TextBold24Regular');
export default TextBold24Regular;
      