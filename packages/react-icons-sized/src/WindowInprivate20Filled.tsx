import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-9zm10 3v.5h-1.3l1.15-1.15c.1.2.15.42.15.65zm-.85-1.35L12.79 6.5H9.97l2-2H14c.23 0 .45.05.65.15zm-4.1-.15l-2 2H5.72l2-2h2.83zm-4.24 0L4.5 6.31V6c0-.83.67-1.5 1.5-1.5h.31zM7.05 8L4.5 10.55V8h2.55zM4.5 11.97L8.47 8h2.82l-6.64 6.65A1.5 1.5 0 014.5 14v-2.03zM12.7 8h2.8v.04L8.04 15.5H6a1.5 1.5 0 01-.65-.15L12.71 8zm2.8 1.45v2.83l-3.22 3.22H9.45l6.05-6.05zm0 4.24V14c0 .83-.67 1.5-1.5 1.5h-.3l1.8-1.8z" fill={primaryFill} /></svg>;
}

const WindowInprivate20Filled = wrapIcon(rawSvg({}), 'WindowInprivate20Filled');
export default WindowInprivate20Filled;
      