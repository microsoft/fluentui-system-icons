import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.79 8.39a1 1 0 01-1.5 1.32L12 4.4l-5.3 5.3-.09.08a1 1 0 01-1.32-1.5l6-6 .1-.08a1 1 0 011.32.08l6 6 .08.1zM5.21 15.6a1 1 0 011.5-1.32L12 19.6l5.3-5.3.09-.08a1 1 0 011.32 1.5l-6 6-.1.08a1 1 0 01-1.32-.08l-6-6-.08-.1z" fill={primaryFill} /></svg>;
}

const ChevronUpDown24Filled = wrapIcon(rawSvg({}), 'ChevronUpDown24Filled');
export default ChevronUpDown24Filled;
      