import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 17.5c0-1.29.38-2.49 1.02-3.5H4.25C3.01 14 2 15 2 16.25v.92c0 .57.18 1.13.51 1.6C4.06 20.92 6.58 22 10 22c.93 0 1.8-.08 2.6-.24A6.48 6.48 0 0111 17.5z" fill={primaryFill} /><path d="M15 7A5 5 0 105 7a5 5 0 0010 0z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM17.41 14h.18c.2.05.37.2.4.41l.01.09V17h2.6c.2.05.36.2.4.41v.18a.5.5 0 01-.4.4l-.1.01H18v2.59a.5.5 0 01-.41.4l-.09.01h-.09a.5.5 0 01-.4-.41L17 20.5V18H14.4a.5.5 0 01-.4-.41v-.18a.5.5 0 01.4-.4l.1-.01H17v-2.59a.5.5 0 01.41-.4z" fill={primaryFill} /></svg>;
}

const PersonAdd24Filled = wrapIcon(rawSvg({}), 'PersonAdd24Filled');
export default PersonAdd24Filled;
      