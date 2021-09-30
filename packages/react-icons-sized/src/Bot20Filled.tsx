import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7 11.5c.99 0 1.8.81 1.8 1.81v.7a3.52 3.52 0 01-1.13 2.55c-.95.87-2.6 1.44-5.37 1.44s-4.42-.57-5.37-1.44A3.52 3.52 0 013.5 14H3.5v-.69c0-1 .81-1.8 1.8-1.8h9.4z" fill={primaryFill} /><path d="M6.5 3C5.67 3 5 3.67 5 4.5v4c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-3v-.5c0-.3-.22-.5-.5-.5a.5.5 0 00-.5.5V3h-3zM7 6.5a1 1 0 112 0 1 1 0 01-2 0zm4 0a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /></svg>;
}

const Bot20Filled = wrapIcon(rawSvg({}), 'Bot20Filled');
export default Bot20Filled;
      