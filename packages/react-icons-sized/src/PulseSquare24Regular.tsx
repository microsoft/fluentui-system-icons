import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 3C19.99 3 21 4 21 5.25v13.5C21 20 20 21 18.75 21H5.25C4.01 21 3 20 3 18.75V5.25C3 4.01 4 3 5.25 3h13.5zm0 1.5H5.25a.75.75 0 00-.75.75v13.5c0 .42.34.75.75.75h13.5c.41 0 .75-.33.75-.75V5.25a.75.75 0 00-.75-.75zm-10.5 7l1.56-3.55a.75.75 0 011.34-.08l.04.1 2.39 5.95 1-2a.75.75 0 01.56-.41l.11-.01h2a.75.75 0 01.1 1.5H15.71l-1.54 3.08a.75.75 0 01-1.32.04l-.05-.1-2.33-5.83-1.04 2.36c-.1.24-.32.4-.57.44l-.11.01h-2a.75.75 0 01-.1-1.5h1.6l1.56-3.55-1.55 3.55z" fill={primaryFill} /></svg>;
}

const PulseSquare24Regular = wrapIcon(rawSvg({}), 'PulseSquare24Regular');
export default PulseSquare24Regular;
      