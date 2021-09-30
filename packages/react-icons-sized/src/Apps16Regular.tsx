import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.81 2.45a1.5 1.5 0 00-2.12 0L7.96 4.18A1.5 1.5 0 006.5 3h-3C2.67 3 2 3.67 2 4.5v8A1.5 1.5 0 003.5 14h8c.83 0 1.5-.67 1.5-1.5v-3c0-.7-.48-1.29-1.13-1.45l1.71-1.7a1.5 1.5 0 000-2.13l-1.77-1.77zM9.58 8H8V6.42L9.58 8zm.82-4.84c.2-.2.5-.2.7 0l1.77 1.77c.2.2.2.5 0 .7L11.1 7.4a.5.5 0 01-.7 0L8.63 5.63a.5.5 0 010-.7l1.77-1.77zM7 4.5V8H3V4.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5zm-4 8V9h4v4H3.5a.5.5 0 01-.5-.5zM8 9h3.5c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5H8V9z" fill={primaryFill} /></svg>;
}

const Apps16Regular = wrapIcon(rawSvg({}), 'Apps16Regular');
export default Apps16Regular;
      