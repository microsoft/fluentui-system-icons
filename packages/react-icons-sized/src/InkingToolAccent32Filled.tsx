import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4h26v4a1 1 0 01-1 1h-5a1 1 0 01-.1.45l-5 10a1 1 0 11-1.8-.9L20.89 9H4a1 1 0 01-1-1V4zm14.86 21.88c0 1.86-.87 3.37-1.93 3.37-1.07 0-1.93-1.51-1.93-3.38 0-1.86.86-3.37 1.93-3.37 1.06 0 1.93 1.51 1.93 3.38z" fill={primaryFill} /></svg>;
}

const InkingToolAccent32Filled = wrapIcon(rawSvg({}), 'InkingToolAccent32Filled');
export default InkingToolAccent32Filled;
      