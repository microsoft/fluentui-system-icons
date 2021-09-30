import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 21h2.79a4.73 4.73 0 01-.96-5H9.5v5zM21 9.5v3.83a4.74 4.74 0 00-1.75-.33H16V9.5h5zm-6.5 0v3.67c-.86.23-1.62.7-2.21 1.33H9.5v-5h5zM21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5zm-6.5-5h-5v5h5V3zM8 3H6.25A3.25 3.25 0 003 6.25V8h5V3zM3 9.5v5h5v-5H3zM3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3zm20 1.75A3.75 3.75 0 0019.25 14h-.1a.75.75 0 00.1 1.5h.15a2.25 2.25 0 01-.15 4.5l-.1.01a.75.75 0 00.1 1.5v-.01h.2A3.75 3.75 0 0023 17.74zm-6.5-3a.75.75 0 00-.75-.75h-.2a3.75 3.75 0 00.2 7.5h.1a.75.75 0 00-.1-1.5h-.15a2.25 2.25 0 01.15-4.5h.1a.75.75 0 00.65-.75zm3.5 3a.75.75 0 00-.75-.75h-3.6a.75.75 0 00.1 1.5h3.6a.75.75 0 00.65-.75z" fill={primaryFill} /></svg>;
}

const TableLink24Filled = wrapIcon(rawSvg({}), 'TableLink24Filled');
export default TableLink24Filled;
      