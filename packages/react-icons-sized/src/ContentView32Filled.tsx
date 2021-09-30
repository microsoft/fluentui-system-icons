import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 11H10v3h12v-3zm-3 9h3v2h-3v-2zM9 4a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V9a5 5 0 00-5-5H9zm-1 7c0-1.1.9-2 2-2h12a2 2 0 012 2v3a2 2 0 01-2 2H10a2 2 0 01-2-2v-3zm11 7h3a2 2 0 012 2v2a2 2 0 01-2 2h-3a2 2 0 01-2-2v-2c0-1.1.9-2 2-2zM8 19a1 1 0 011-1h5a1 1 0 010 2H9a1 1 0 01-1-1zm1 3h5a1 1 0 010 2H9a1 1 0 110-2z" fill={primaryFill} /></svg>;
}

const ContentView32Filled = wrapIcon(rawSvg({}), 'ContentView32Filled');
export default ContentView32Filled;
      