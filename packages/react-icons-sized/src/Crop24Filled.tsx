import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 15.5c0 .78.6 1.42 1.36 1.5H21a1 1 0 01.12 2H19v2a1 1 0 01-2 .12V19H8.5A3.5 3.5 0 015 15.7V7H3a1 1 0 01-.12-2H5V3a1 1 0 012-.12V15.5zM8 5h7.5A3.5 3.5 0 0119 8.3V16h-2V8.5c0-.78-.6-1.42-1.36-1.5H8V5z" fill={primaryFill} /></svg>;
}

const Crop24Filled = wrapIcon(rawSvg({}), 'Crop24Filled');
export default Crop24Filled;
      