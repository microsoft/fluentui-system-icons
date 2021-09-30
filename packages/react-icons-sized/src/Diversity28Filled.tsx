import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3a3 3 0 00-3 3v4a3 3 0 003 3h4a3 3 0 003-3V6a3 3 0 00-3-3h-4zM6.19 4.12a2.02 2.02 0 013.62 0l2.97 5.9A2.05 2.05 0 0110.96 13H5.04a2.05 2.05 0 01-1.82-2.98l2.97-5.9zM3.96 17.06c.4-.56.93-1.03 1.53-1.38l6.5 7.32c-.4.54-.9 1-1.49 1.33l-6.54-7.27zM3 20a5 5 0 01.23-1.51L9 24.9A5.02 5.02 0 013 20zm10 0a5 5 0 01-.26 1.58L6.98 15.1a5.02 5.02 0 016 4.5v.02c.02.12.02.25.02.38zm7.95-4.76a2.05 2.05 0 00-1.9 0l-3 1.57c-.65.34-1.05 1-1.05 1.73v2.92c0 .72.4 1.39 1.05 1.73l3 1.57c.6.32 1.3.32 1.9 0l3-1.57c.65-.34 1.05-1 1.05-1.73v-2.92c0-.72-.4-1.39-1.05-1.73l-3-1.57z" fill={primaryFill} /></svg>;
}

const Diversity28Filled = wrapIcon(rawSvg({}), 'Diversity28Filled');
export default Diversity28Filled;
      