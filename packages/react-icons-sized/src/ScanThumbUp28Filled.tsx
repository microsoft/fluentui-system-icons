import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3A3.75 3.75 0 003 6.75v3.5a.75.75 0 001.5 0v-3.5c0-1.24 1-2.25 2.25-2.25h3.5a.75.75 0 000-1.5h-3.5zm14.5 0A3.75 3.75 0 0125 6.75v3.5a.75.75 0 01-1.5 0v-3.5c0-1.24-1-2.25-2.25-2.25h-3.5a.75.75 0 010-1.5h3.5zM3 21.25A3.75 3.75 0 006.75 25h3.5a.75.75 0 000-1.5h-3.5c-1.24 0-2.25-1-2.25-2.25v-3.5a.75.75 0 00-1.5 0v3.5zM21.25 25A3.75 3.75 0 0025 21.25v-3.5a.75.75 0 00-1.5 0v3.5c0 1.24-1 2.25-2.25 2.25h-3.5a.75.75 0 000 1.5h3.5zm-9.2-14.79a7.8 7.8 0 01-1.53 2.2l-.04.04-1.86 1.08a2.74 2.74 0 00-1.2 3.35l.53 1.38c.3.8.96 1.4 1.77 1.66l5.41 1.68c1.75.54 3.6-.43 4.13-2.18l1.38-4.66a2.76 2.76 0 00-2.66-3.52h-.43c.12-.55.22-1.18.2-1.75a4.4 4.4 0 00-.33-1.76 2.54 2.54 0 00-1.68-1.4c-1.28-.36-2.18.6-2.46 1.3-.23.57-.43.97-.69 1.47l-.55 1.11z" fill={primaryFill} /></svg>;
}

const ScanThumbUp28Filled = wrapIcon(rawSvg({}), 'ScanThumbUp28Filled');
export default ScanThumbUp28Filled;
      