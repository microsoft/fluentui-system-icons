import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5h1.52c.12-.85.85-1.5 1.73-1.5h8c1.8 0 3.25 1.46 3.25 3.25v8c0 .88-.65 1.61-1.5 1.73V18c1.68-.13 3-1.53 3-3.24v-8A4.75 4.75 0 0017.25 2h-8a3.25 3.25 0 00-3.24 3zM2 9.25C2 7.45 3.46 6 5.25 6h9.5C16.55 6 18 7.46 18 9.25v9.5c0 1.8-1.45 3.25-3.25 3.25h-9.5A3.25 3.25 0 012 18.75v-9.5zM5.25 7.5c-.97 0-1.75.78-1.75 1.75v7.25h5.75c1.24 0 2.25 1 2.25 2.25v1.75h3.25c.97 0 1.75-.78 1.75-1.75v-9.5c0-.97-.78-1.75-1.75-1.75h-9.5zm4.75 13v-1.75a.75.75 0 00-.75-.75H3.5v.75c0 .97.78 1.75 1.75 1.75H10z" fill={primaryFill} /></svg>;
}

const TabDesktopMultipleBottom24Regular = wrapIcon(rawSvg({}), 'TabDesktopMultipleBottom24Regular');
export default TabDesktopMultipleBottom24Regular;
      