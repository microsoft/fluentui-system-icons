import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.2 40.96l2.67 2.67a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76L7.04 8.8A6.22 6.22 0 006 12.25v6.5a1.25 1.25 0 102.5 0v-6.5c0-.58.13-1.13.37-1.62l10.4 10.41-.1.16A4.62 4.62 0 0116.94 23l-1.25.48a2.98 2.98 0 00-1.87 3.36l.68 3.5a3.49 3.49 0 002.6 2.72l8.24 2c2.28.57 4.6-.27 6.02-1.96l6.02 6.02c-.5.24-1.04.37-1.62.37h-6.5a1.25 1.25 0 100 2.5h6.5c1.27 0 2.46-.38 3.45-1.04zM22 16.7l11.27 11.28.86-3.33a3.85 3.85 0 00-3.51-4.86 7.37 7.37 0 00-.62-.03h-1.33c.22-.88.37-1.75.37-2.54 0-1.33-.26-2.61-.83-3.61-.58-1.02-1.56-1.85-2.92-1.85-.9 0-1.53.49-1.94 1-.38.5-.63 1.1-.8 1.63a15.6 15.6 0 00-.47 1.9l-.08.41zm17.5 17.5l2.44 2.44c.04-.28.06-.58.06-.88v-6.5a1.25 1.25 0 10-2.5 0v4.95zM11.37 6.07L13.8 8.5h4.95a1.25 1.25 0 100-2.5h-6.5c-.3 0-.6.02-.88.06zM35.75 6C39.2 6 42 8.8 42 12.25v6.5a1.25 1.25 0 11-2.5 0v-6.5a3.75 3.75 0 00-3.75-3.75h-6.5a1.25 1.25 0 110-2.5h6.5zM6 35.75C6 39.2 8.8 42 12.25 42h6.5a1.25 1.25 0 100-2.5h-6.5a3.75 3.75 0 01-3.75-3.75v-6.5a1.25 1.25 0 10-2.5 0v6.5z" fill={primaryFill} /></svg>;
}

const ScanThumbUpOff48Filled = wrapIcon(rawSvg({}), 'ScanThumbUpOff48Filled');
export default ScanThumbUpOff48Filled;
      