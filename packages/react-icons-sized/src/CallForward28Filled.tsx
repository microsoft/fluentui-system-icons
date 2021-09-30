import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.88 3.8C9 2.3 10.98 2.2 12.6 2.96l.9.42a2.25 2.25 0 011.25 2.42L14.35 8a3.25 3.25 0 01-2.6 2.64l-1.47.27a.64.64 0 00-.5.4c-.6 1.63-.41 3.99.24 5.62.08.22.29.37.54.4l1.04.14a3.25 3.25 0 012.77 2.67l.36 2.02a2.25 2.25 0 01-1.34 2.45l-1.22.53c-1.67.71-3.68.5-4.7-1.1C6.3 22.17 5 18.99 5 14 5 8.86 6.53 5.64 7.88 3.8z" fill={primaryFill} /><path d="M19.78 8.72a.75.75 0 10-1.06 1.06L21.94 13h-8.19a.75.75 0 000 1.5h8.19l-3.22 3.22a.75.75 0 101.06 1.06l4.5-4.5c.3-.3.3-.77 0-1.06l-4.5-4.5z" fill={primaryFill} /></svg>;
}

const CallForward28Filled = wrapIcon(rawSvg({}), 'CallForward28Filled');
export default CallForward28Filled;
      