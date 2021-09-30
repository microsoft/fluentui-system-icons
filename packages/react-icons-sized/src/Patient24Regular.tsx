import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2C18.99 2 20 3 20 4.25v15.5C20 21 19 22 17.75 22H6.25C5.01 22 4 21 4 19.75V4.25c0-1.2.93-2.17 2.1-2.24L6.25 2h11.5zm.75 14h-13v3.75c0 .42.34.75.75.75h11.5c.41 0 .75-.33.75-.75V16zM7.75 17.5h8.5a.75.75 0 01.1 1.5h-8.6a.75.75 0 01-.1-1.5h8.6-8.5zm10-14H6.15a.75.75 0 00-.65.75V14.5H8v-2.25c0-.65.5-1.18 1.12-1.25h5.63c.65 0 1.18.49 1.24 1.12l.01.13v2.25h2.5V4.25a.75.75 0 00-.75-.75zm-3.25 9h-5v2h5v-2zM12 5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1.5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const Patient24Regular = wrapIcon(rawSvg({}), 'Patient24Regular');
export default Patient24Regular;
      