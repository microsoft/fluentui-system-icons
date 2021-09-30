import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.37 2.03a8 8 0 11-7.36 7.7.75.75 0 111.5.05 6.5 6.5 0 101.57-4.03l-.2.25h2.37l.1.01a.75.75 0 010 1.49H3.15a.75.75 0 01-.64-.64V2.66c.05-.34.3-.6.64-.65h.2c.34.05.6.3.65.64v2.06a7.98 7.98 0 015.37-2.68zM9.75 6l.1.01c.33.05.6.3.64.64l.01.1V10h1.85a.75.75 0 010 1.5h-2.7a.75.75 0 01-.64-.65l-.01-.1v-4.1c.05-.33.32-.6.65-.64h.1z" fill={primaryFill} /></svg>;
}

const History20Filled = wrapIcon(rawSvg({}), 'History20Filled');
export default History20Filled;
      