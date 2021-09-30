import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 4.75c-.83 0-1.5.67-1.5 1.5v11.5c0 .83.67 1.5 1.5 1.5h11.5c.83 0 1.5-.67 1.5-1.5v-4a1 1 0 112 0v4a3.5 3.5 0 01-3.5 3.5H6.25a3.5 3.5 0 01-3.5-3.5V6.25a3.5 3.5 0 013.5-3.5h4a1 1 0 110 2h-4zm6.5-1a1 1 0 011-1h6.5a1 1 0 011 1v6.5a1 1 0 11-2 0V6.16l-4.8 4.8a1 1 0 11-1.4-1.42l4.79-4.79h-4.09a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const Open24Filled = wrapIcon(rawSvg({}), 'Open24Filled');
export default Open24Filled;
      