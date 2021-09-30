import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.37 3.31l.86 2.03c.37.88.16 1.92-.52 2.57l-1.9 1.8a8.01 8.01 0 001.1 3.17 8.68 8.68 0 002.26 2.6l2.28-.76c.86-.29 1.8.04 2.33.82l1.23 1.81c.62.9.5 2.15-.26 2.92l-.81.82a3.02 3.02 0 01-3.06.77c-2.53-.79-4.87-3.14-7-7.05C3.75 10.9 3 7.57 3.62 4.84a3.26 3.26 0 012.15-2.4l1.08-.34c1-.33 2.09.2 2.52 1.21zm7.78-1.3l.1-.01c.38 0 .7.28.74.65l.01.1V6h3.25c.38 0 .7.28.75.65v.1c0 .38-.28.7-.65.74l-.1.01H18v3.25c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1V7.5h-3.25a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74h3.35V2.74c0-.38.28-.7.65-.75h.1-.1z" fill={primaryFill} /></svg>;
}

const CallAdd24Filled = wrapIcon(rawSvg({}), 'CallAdd24Filled');
export default CallAdd24Filled;
      