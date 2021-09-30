import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 11.4v9.35C3 23.1 4.9 25 7.25 25h7.25a7.49 7.49 0 01-.88-1.5H7.25a2.75 2.75 0 01-2.75-2.75V11.4a2.75 2.75 0 01-1.5 0z" fill={primaryFill} /><path d="M25 7.25v7.25a7.49 7.49 0 00-1.5-.88V7.25a2.75 2.75 0 00-2.75-2.75H7.25c-1.14 0-2.11.7-2.53 1.68a2.74 2.74 0 00-1.55-.12A4.25 4.25 0 017.25 3h13.5C23.1 3 25 4.9 25 7.25z" fill={primaryFill} /><path d="M9.75 15h5.65c-.48.44-.9.95-1.25 1.5h-4.4a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M2 8.75a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0z" fill={primaryFill} /><path d="M9.75 11a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill={primaryFill} /><path d="M27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zM20.5 16a2.5 2.5 0 00-2.5 2.5v2.8l-.85.85a.5.5 0 00.35.85h6a.5.5 0 00.35-.85l-.85-.86V18.5a2.5 2.5 0 00-2.5-2.5zm-1.41 8a1.5 1.5 0 002.82 0H19.1z" fill={primaryFill} /></svg>;
}

const ChannelAlert28Regular = wrapIcon(rawSvg({}), 'ChannelAlert28Regular');
export default ChannelAlert28Regular;
      