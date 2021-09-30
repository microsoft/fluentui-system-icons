import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.17 6.06A2.76 2.76 0 016.5 8.75 2.75 2.75 0 013 11.4v9.35C3 23.1 4.9 25 7.25 25h7.25a7.47 7.47 0 01-.35-8.5h-4.4a.75.75 0 010-1.5h5.65a7.47 7.47 0 019.6-.5V7.25C25 4.9 23.1 3 20.75 3H7.25a4.25 4.25 0 00-4.08 3.06zM9.75 11h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5zM3 7.17a1.75 1.75 0 101.5 3.16A1.75 1.75 0 003 7.17zM27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-2 0a.5.5 0 00-.5-.5h-8a.5.5 0 000 1h8a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const ChannelSubtract28Filled = wrapIcon(rawSvg({}), 'ChannelSubtract28Filled');
export default ChannelSubtract28Filled;
      