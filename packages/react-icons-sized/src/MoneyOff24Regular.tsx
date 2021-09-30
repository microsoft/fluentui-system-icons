import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l1.74 1.74A2.25 2.25 0 002 7.25v7.5C2 15.99 3 17 4.25 17h11.69l1.5 1.5H4.4A3 3 0 007 20h10.25c.51 0 1-.08 1.46-.23l2.01 2.01a.75.75 0 101.06-1.06L3.28 2.22zM14.44 15.5H6.5v-.75c0-1.24-1-2.25-2.25-2.25H3.5v-3h.75c1.14 0 2.09-.85 2.23-1.96l1.64 1.64a3 3 0 004.2 4.2l2.12 2.12zM9.2 10.26l2.04 2.04a1.5 1.5 0 01-2.05-2.05zM3.5 7.25c0-.41.34-.75.75-.75H5v.75c0 .41-.34.75-.75.75H3.5v-.75zm.75 8.25a.75.75 0 01-.75-.75V14h.75c.41 0 .75.34.75.75v.75h-.75zm12.5-3c-.32 0-.62.06-.89.18L17.18 14h.32v.32l1.32 1.32c.12-.27.18-.57.18-.89v-7.5C19 6.01 18 5 16.75 5H8.18l1.5 1.5h4.82v.75c0 1.24 1 2.25 2.25 2.25h.75v3h-.75zm.75-5.25V8h-.75a.75.75 0 01-.75-.75V6.5h.75c.41 0 .75.34.75.75zm2.56 9.63l1.09 1.09c.53-.77.85-1.71.85-2.72V10a3 3 0 00-1.5-2.6v7.85c0 .6-.16 1.15-.44 1.63z" fill={primaryFill} /></svg>;
}

const MoneyOff24Regular = wrapIcon(rawSvg({}), 'MoneyOff24Regular');
export default MoneyOff24Regular;
      