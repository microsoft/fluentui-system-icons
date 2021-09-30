import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.11 17.24a7 7 0 003.41 4.84l-2.47.82a2 2 0 01-2.32-.83l-.43-.69a2 2 0 01.22-2.42l1.59-1.72zM17 10a6 6 0 110 12 6 6 0 010-12zM7 1c.21 0 .43.01.63.03l-.35.12A4.53 4.53 0 004.7 7.92a4.5 4.5 0 007.16.58L13 7.3A6 6 0 117 1zm5.8.65l.1.13.1.13.64 1.02a2 2 0 01-.11 2.3l-.11.14-2.29 2.45a3.5 3.5 0 11-4.5-5.3c.31-.19.64-.33.97-.42l3.08-1.02a2 2 0 012.12.57zm-2.45 1.41a.75.75 0 00-.26.94l.05.1.27.39.06.09a.75.75 0 001.24-.83l-.06-.1-.26-.38-.07-.1a.75.75 0 00-.97-.11z" fill={primaryFill} /></svg>;
}

const SurfaceEarbuds24Filled = wrapIcon(rawSvg({}), 'SurfaceEarbuds24Filled');
export default SurfaceEarbuds24Filled;
      