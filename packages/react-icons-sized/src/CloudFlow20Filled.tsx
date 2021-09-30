import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0118 9.76 2.99 2.99 0 0013.17 11a2.5 2.5 0 00-2.32 1.7l-.1.3H5.28A3.33 3.33 0 012 9.62a3.33 3.33 0 013.28-3.37h.07C5.6 3.9 7.18 2 10 2zm6 12a2 2 0 10-2-2h-.78a1.5 1.5 0 00-1.42 1.03l-.55 1.63a.5.5 0 01-.47.34H9.73a2 2 0 10.27 1h.78a1.5 1.5 0 001.42-1.03l.55-1.63a.5.5 0 01.47-.34h1.05c.34.6.99 1 1.73 1zm0-1a1 1 0 110-2 1 1 0 010 2zm-7 3a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const CloudFlow20Filled = wrapIcon(rawSvg({}), 'CloudFlow20Filled');
export default CloudFlow20Filled;
      