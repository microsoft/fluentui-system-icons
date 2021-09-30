import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.06 9c.83 0 1.64.28 2.3.78l.17.15 2.59 2.26c.19.17.42.27.67.3l.15.01h17.31c2 0 3.64 1.57 3.74 3.55l.01.2v19c0 2-1.57 3.64-3.55 3.74l-.2.01H7.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2v-22.5c0-2 1.57-3.64 3.55-3.74l.2-.01h9.31zm5.79 6l-2.13 2.61A3.75 3.75 0 0118.04 19l-.23.01H6.5v16.25c0 .65.5 1.18 1.12 1.24l.13.01h32.5c.65 0 1.18-.5 1.24-1.12l.01-.13v-19c0-.65-.5-1.18-1.12-1.24l-.13-.01h-17.4zm-5.79-3.5H7.75c-.65 0-1.18.5-1.24 1.12l-.01.13v3.75h11.31c.33 0 .64-.13.88-.36l.09-.1 1.63-2.01-2.53-2.22a1.25 1.25 0 00-.67-.3l-.15-.01z" fill={primaryFill} /></svg>;
}

const Folder48Regular = wrapIcon(rawSvg({}), 'Folder48Regular');
export default Folder48Regular;
      