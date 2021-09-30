import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06L3.94 5h-.19C2.78 5 2 5.78 2 6.75v8.5c0 .97.78 1.75 1.75 1.75h12.19l1.5 1.5H4.4A3 3 0 007 20h10.25c.51 0 1-.08 1.46-.23l2.01 2.01a.75.75 0 101.06-1.06L3.28 2.22zm8.65 10.77a2.25 2.25 0 01-3.17-3.17L11.93 13zM5.19 6.25l1.3 1.3A2.25 2.25 0 014.24 9.5h-1V8h1c.41 0 .75-.34.75-.75v-1h.19zM4.25 14h-1v-1.5h1c1.24 0 2.25 1 2.25 2.25v1H5v-1a.75.75 0 00-.75-.75zm13.5 0h-.57l1.75 1.75c.04-.16.07-.33.07-.5v-8.5C19 5.78 18.22 5 17.25 5H8.18l7.68 7.68c.27-.12.57-.18.89-.18h1V14zM16 6.25v1c0 .41.34.75.75.75h1v1.5h-1c-1.24 0-2.25-1-2.25-2.25v-1H16zm4.06 10.63l1.09 1.09c.53-.77.85-1.71.85-2.72V10a3 3 0 00-1.5-2.6v7.85c0 .6-.16 1.15-.44 1.63z" fill={primaryFill} /></svg>;
}

const MoneyOff24Filled = wrapIcon(rawSvg({}), 'MoneyOff24Filled');
export default MoneyOff24Filled;
      