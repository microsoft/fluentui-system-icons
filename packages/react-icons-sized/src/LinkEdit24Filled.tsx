import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6a1 1 0 00-1-1H6.78A5 5 0 007 15h2.12A1 1 0 009 13H6.82A3 3 0 017 7h2.12A1 1 0 0010 6zm12 4a5 5 0 00-5-5h-2.12A1 1 0 0015 7h2.17A3 3 0 0120 10V10c.7.06 1.37.34 1.93.84.04-.27.07-.56.07-.85zm-4.23.64c-.1.07-.2.15-.29.24a1 1 0 01-.36.11H7a1 1 0 01-.12-1.98L7 9h10a1 1 0 01.77 1.64zm.33 1.03l-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const LinkEdit24Filled = wrapIcon(rawSvg({}), 'LinkEdit24Filled');
export default LinkEdit24Filled;
      