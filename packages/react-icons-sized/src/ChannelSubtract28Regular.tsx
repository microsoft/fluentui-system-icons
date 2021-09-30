import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 11.4v9.35C3 23.1 4.9 25 7.25 25h7.25a7.49 7.49 0 01-.88-1.5H7.25a2.75 2.75 0 01-2.75-2.75V11.4a2.75 2.75 0 01-1.5 0zm22-4.15v7.25a7.49 7.49 0 00-1.5-.88V7.25a2.75 2.75 0 00-2.75-2.75H7.25c-1.14 0-2.11.7-2.53 1.68a2.74 2.74 0 00-1.55-.12A4.25 4.25 0 017.25 3h13.5C23.1 3 25 4.9 25 7.25zM9.75 15h5.65c-.48.44-.9.95-1.25 1.5h-4.4a.75.75 0 010-1.5zM2 8.75a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0zM9.75 11a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-2 0a.5.5 0 00-.5-.5h-8a.5.5 0 000 1h8a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const ChannelSubtract28Regular = wrapIcon(rawSvg({}), 'ChannelSubtract28Regular');
export default ChannelSubtract28Regular;
      