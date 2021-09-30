import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2C2.67 2 2 2.67 2 3.5v1C2 5.33 2.67 6 3.5 6h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11zM15 7H3v5.5A3.5 3.5 0 006.5 16h5a3.5 3.5 0 003.5-3.5V7zM7 8.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM8.5 18c-.95 0-1.82-.38-2.45-1h6.45a3.5 3.5 0 003.5-3.5V7.09c.58.2 1 .76 1 1.41v5a4.5 4.5 0 01-4.5 4.5h-4z" fill={primaryFill} /></svg>;
}

const ArchiveMultiple20Filled = wrapIcon(rawSvg({}), 'ArchiveMultiple20Filled');
export default ArchiveMultiple20Filled;
      