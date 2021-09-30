import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 6a5 5 0 1110 0A5 5 0 011 6zm2.65-.1c.2.2.5.2.7 0L5.5 4.76V8.5a.5.5 0 001 0V4.76L7.65 5.9a.5.5 0 10.7-.7l-2-2a.5.5 0 00-.7 0l-2 2a.5.5 0 000 .7z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp12Filled = wrapIcon(rawSvg({}), 'ArrowCircleUp12Filled');
export default ArrowCircleUp12Filled;
      