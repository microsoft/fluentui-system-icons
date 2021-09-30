import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5h1.52c.12-.85.85-1.5 1.73-1.5h8c1.8 0 3.25 1.46 3.25 3.25v8c0 .88-.65 1.61-1.5 1.73V18c1.68-.13 3-1.53 3-3.24v-8A4.75 4.75 0 0017.25 2h-8a3.25 3.25 0 00-3.24 3zM2 9.25C2 7.45 3.46 6 5.25 6h9.5C16.55 6 18 7.46 18 9.25v9.5c0 1.8-1.45 3.25-3.25 3.25H11.5v-3.25c0-1.24-1-2.25-2.25-2.25H2V9.25zM2 18v.75C2 20.55 3.46 22 5.25 22H10v-3.25a.75.75 0 00-.75-.75H2z" fill={primaryFill} /></svg>;
}

const TabDesktopMultipleBottom24Filled = wrapIcon(rawSvg({}), 'TabDesktopMultipleBottom24Filled');
export default TabDesktopMultipleBottom24Filled;
      