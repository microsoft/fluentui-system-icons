import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v7c0 .83.67 1.5 1.5 1.5h9.8l1 1H4.08c.2.58.76 1 1.41 1h9c.25 0 .49-.03.72-.07l1.93 1.92a.5.5 0 00.7-.7l-15-15zm6.98 8.39a1.75 1.75 0 01-2.37-2.37l2.37 2.37zM5.9 6.61A2 2 0 014 8H3V7h1a1 1 0 001-1v-.3l.9.91zM3 11v-1h1a2 2 0 012 2v1H5v-1a1 1 0 00-1-1H3zm6.42-3.7l1.28 1.28 1.95 1.95A2 2 0 0114 10h1v1h-1a1 1 0 00-.65.24l2.27 2.26c.24-.27.38-.62.38-1v-7c0-.83-.67-1.5-1.5-1.5H6.12l3.3 3.3zM15 7v1h-1a2 2 0 01-2-2V5h1v1a1 1 0 001 1h1zm1.33 7.2l.7.72c.6-.63.97-1.48.97-2.42v-5c0-.65-.42-1.2-1-1.41v6.41a2.5 2.5 0 01-.67 1.7z" fill={primaryFill} /></svg>;
}

const MoneyOff20Filled = wrapIcon(rawSvg({}), 'MoneyOff20Filled');
export default MoneyOff20Filled;
      