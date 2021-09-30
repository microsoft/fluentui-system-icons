import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 4a3.25 3.25 0 013.24 3.07l.01.18v9.5a3.25 3.25 0 01-3.07 3.24l-.18.01h-8.5c-.77 0-1.5-.27-2.09-.76l-.15-.13-5-4.75a3.25 3.25 0 01-.11-4.6L3 9.64l5-4.75a3.25 3.25 0 012.03-.88l.2-.01h8.51zm-7.3 4.4a.75.75 0 00-1.05 1.05l.07.08L12.94 12l-2.47 2.47-.07.08a.75.75 0 001.05 1.05l.08-.07L14 13.06l2.47 2.47.08.07a.75.75 0 001.05-1.05l-.07-.08L15.06 12l2.47-2.47.07-.08a.75.75 0 00-1.05-1.05l-.08.07L14 10.94l-2.47-2.47-.08-.07z" fill={primaryFill} /></svg>;
}

const Backspace24Filled = wrapIcon(rawSvg({}), 'Backspace24Filled');
export default Backspace24Filled;
      