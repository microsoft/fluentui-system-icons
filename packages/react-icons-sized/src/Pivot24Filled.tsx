import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.5V17a3.5 3.5 0 003.5 3.5h4.38a2.25 2.25 0 01.53-2.34l1.5-1.5a2.25 2.25 0 013.71.84h.88v-.88a2.25 2.25 0 01-.84-3.71l1.5-1.5a2.25 2.25 0 012.34-.53V6.5A3.5 3.5 0 0017 3H6.5A3.5 3.5 0 003 6.5zM6.5 5h1C8.33 5 9 5.67 9 6.5v1C9 8.33 8.33 9 7.5 9h-1A1.5 1.5 0 015 7.5v-1C5 5.67 5.67 5 6.5 5zM11 6.5c0-.83.67-1.5 1.5-1.5H17c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-4.5A1.5 1.5 0 0111 7.5v-1zM7.5 11c.83 0 1.5.67 1.5 1.5V17c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 015 17v-4.5c0-.83.67-1.5 1.5-1.5h1zm12.78 1.47a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 101.06 1.06l.22-.22v2.44c0 .97-.78 1.75-1.75 1.75h-2.44l.22-.22a.75.75 0 10-1.06-1.06l-1.5 1.5a.75.75 0 000 1.06l1.5 1.5a.75.75 0 101.06-1.06l-.22-.22h2.44c1.8 0 3.25-1.46 3.25-3.25v-2.44l.22.22a.75.75 0 101.06-1.06l-1.5-1.5z" fill={primaryFill} /></svg>;
}

const Pivot24Filled = wrapIcon(rawSvg({}), 'Pivot24Filled');
export default Pivot24Filled;
      