import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12.5a2.5 2.5 0 103 4 2.5 2.5 0 00-3-4zm.19-1.78A4 4 0 116 18.21v17.54C6 39.2 8.8 42 12.25 42h11.8a12.94 12.94 0 01-.31-13.5h-6.49a1.25 1.25 0 110-2.5h8.37A12.96 12.96 0 0142 24.04V12.25C42 8.8 39.2 6 35.75 6h-23.5c-2.92 0-5.38 2-6.06 4.72zM16 20.25c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 110 2.5h-13.5c-.69 0-1.25-.56-1.25-1.25zM46 35a11 11 0 11-22 0 11 11 0 0122 0zm-3 0a1 1 0 00-1-1H28a1 1 0 100 2h14a1 1 0 001-1z" fill={primaryFill} /></svg>;
}

const ChannelSubtract48Filled = wrapIcon(rawSvg({}), 'ChannelSubtract48Filled');
export default ChannelSubtract48Filled;
      