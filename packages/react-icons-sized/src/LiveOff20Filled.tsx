import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l1.8 1.81a8.22 8.22 0 00.65 11.36c.3.27.74.24 1.01-.03a.78.78 0 00-.02-1.11 6.73 6.73 0 01-.57-9.15l.71.71a5.73 5.73 0 00.66 7.82c.3.27.73.23.99-.03.32-.33.26-.85-.04-1.14a4.24 4.24 0 01-.54-5.58l1.85 1.84a1.5 1.5 0 002 2l6.5 6.5a.5.5 0 00.7-.7l-1.8-1.81-1.07-1.07-.71-.71-1.07-1.07-1.85-1.84-2-2L7.4 6.69l-.94-.94-.82-.82L4.7 4 2.85 2.15z" fill={primaryFill} /><path d="M16.65 14.53a8.21 8.21 0 00-1.08-10.37.73.73 0 00-1.02 0c-.31.32-.28.8 0 1.1a6.73 6.73 0 011.01 8.18l1.09 1.09z" fill={primaryFill} /><path d="M14.83 12.7a5.73 5.73 0 00-1.04-6.79.71.71 0 00-1 .02c-.32.32-.28.82.01 1.11a4.24 4.24 0 01.9 4.54l1.13 1.12z" fill={primaryFill} /></svg>;
}

const LiveOff20Filled = wrapIcon(rawSvg({}), 'LiveOff20Filled');
export default LiveOff20Filled;
      