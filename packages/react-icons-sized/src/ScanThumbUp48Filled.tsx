import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 6A6.25 6.25 0 006 12.25v6.5a1.25 1.25 0 102.5 0v-6.5a3.75 3.75 0 013.75-3.75h6.5a1.25 1.25 0 100-2.5h-6.5zm23.5 0C39.2 6 42 8.8 42 12.25v6.5a1.25 1.25 0 11-2.5 0v-6.5a3.75 3.75 0 00-3.75-3.75h-6.5a1.25 1.25 0 110-2.5h6.5zM6 35.75C6 39.2 8.8 42 12.25 42h6.5a1.25 1.25 0 100-2.5h-6.5a3.75 3.75 0 01-3.75-3.75v-6.5a1.25 1.25 0 10-2.5 0v6.5zM35.75 42C39.2 42 42 39.2 42 35.75v-6.5a1.25 1.25 0 10-2.5 0v6.5a3.75 3.75 0 01-3.75 3.75h-6.5a1.25 1.25 0 100 2.5h6.5zM25.29 11.75c-.9 0-1.53.49-1.94 1-.38.5-.63 1.1-.8 1.63a15.6 15.6 0 00-.47 1.9l-.13.6-2.77 4.32A4.62 4.62 0 0116.93 23l-1.25.48a2.98 2.98 0 00-1.87 3.36l.68 3.5a3.49 3.49 0 002.6 2.72l8.24 2a6 6 0 007.22-4.3l1.58-6.13a3.85 3.85 0 00-3.51-4.86 7.37 7.37 0 00-.62-.03h-1.33c.22-.88.37-1.75.37-2.54 0-1.33-.26-2.61-.83-3.61-.58-1.02-1.56-1.85-2.92-1.85z" fill={primaryFill} /></svg>;
}

const ScanThumbUp48Filled = wrapIcon(rawSvg({}), 'ScanThumbUp48Filled');
export default ScanThumbUp48Filled;
      